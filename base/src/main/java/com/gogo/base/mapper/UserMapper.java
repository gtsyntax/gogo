package com.gogo.base.mapper;

import com.gogo.base.dto.NewUserRequest;
import com.gogo.base.dto.UserDto;
import com.gogo.base.models.User;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface UserMapper {
    @Mapping(target = "user.roles", ignore = true)
    @Mapping(target = "user.createdAt", ignore = true)
    @Mapping(target = "user.updatedAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    UserDto toUserDto(User user, String token);

    @Mapping(target = "userdto.email", ignore = true)
    @Mapping(target = "userdto.roles", ignore = true)
    @Mapping(target = "userdto.createdAt", ignore = true)
    @Mapping(target = "userdto.updatedAt", ignore = true)
    @Mapping(source = "encodedPassword", target = "password")
    User toUser(UserDto userDto, String encodedPassword);

    User toUser(NewUserRequest newUserRequest);
}
