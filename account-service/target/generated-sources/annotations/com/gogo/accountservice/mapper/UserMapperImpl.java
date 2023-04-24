package com.gogo.accountservice.mapper;

import com.gogo.accountservice.dto.NewUserRequest;
import com.gogo.accountservice.dto.UserDto;
import com.gogo.accountservice.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-24T22:52:21+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.6 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user, String token) {
        if ( user == null && token == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        if ( user != null ) {
            userDto.setUsername( user.getUsername() );
        }
        if ( token != null ) {
            userDto.setToken( token );
        }

        return userDto;
    }

    @Override
    public User toUser(UserDto userDto, String encodedPassword) {
        if ( userDto == null && encodedPassword == null ) {
            return null;
        }

        User user = new User();

        if ( userDto != null ) {
            user.setId( userDto.getId() );
            user.setUsername( userDto.getUsername() );
        }
        if ( encodedPassword != null ) {
            user.setPassword( encodedPassword );
        }

        return user;
    }

    @Override
    public User toUser(NewUserRequest newUserRequest) {
        if ( newUserRequest == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( newUserRequest.getUsername() );
        user.setEmail( newUserRequest.getEmail() );
        user.setPassword( newUserRequest.getPassword() );

        return user;
    }
}
