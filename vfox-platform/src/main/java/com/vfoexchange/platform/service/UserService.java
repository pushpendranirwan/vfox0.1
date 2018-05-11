package com.vfoexchange.platform.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.vfoexchange.platform.model.User;

public interface UserService extends UserDetailsService{

    public void addUser(User user);

    public User find(int userId);
}
