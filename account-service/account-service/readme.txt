This service uses JWT token to authenticate users.

APIs:

/auth/**
    /login
        Request body:
            username: String
            password: String
        Returns:
            id      : UUID
            username: String
            token   : String
    /register
        Request body:
            username: String
            email   : String
            password: String



Versions:

v1:
    1. Users can register and login with fundamental credentials
    2. Four types of user type: ADMIN, USER, PARTNER, COURIER
    3. Spring Security config implemented



Upcoming Features:

APIs:
    1. Assign Role to user. (Or get as a parameter through register)

Changes:
    1. Might migrate Security Config to Gateway. Or seek authorization from Account Service.