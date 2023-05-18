package com.example.demo.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY = "357538782F413F4428472B4B6150645367566B5970337336763979244226452948404D6351655468576D5A7134743777217A25432A462D4A614E645267556B58";

    public String getEmailFromToken(String jwtToken) {
        return getClaimFromToken(jwtToken, Claims::getSubject);
    }

    public <T> T getClaimFromToken(String jwtToken, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(jwtToken);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(SignatureAlgorithm.ES512, SECRET_KEY)
                .compact();
    }

    public Date getExpirationDateFromToken(String jwtToken) {
        return getClaimFromToken(jwtToken, Claims::getExpiration);
    }

    private Boolean isTokenExpired(String jwtToken) {
        final Date expiration = getExpirationDateFromToken(jwtToken);
        return expiration.before(new Date());
    }

    public Boolean isTokenValid(String jwtToken, UserDetails userDetails) {
        final String email = getEmailFromToken(jwtToken);
        return (email.equals(userDetails.getUsername())) && !isTokenExpired(jwtToken);
    }

    private Claims getAllClaimsFromToken(String jwtToken) {
        return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(jwtToken).getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

