package com.tmz.wm.vfox.platform.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.tmz.wm.vfox.platform.model.User;

public interface UserService extends UserDetailsService{

    public void addUser(User user);

    public User find(int userId);
}
