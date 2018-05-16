package com.vfoexchange.restServer.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vfoexchange.restServer.dao.UserDao;
import com.vfoexchange.restServer.model.User;
import com.vfoexchange.restServer.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    public void addUser(User user) {
        userDao.add(user);
    }


    public User find(int userId) {

        return userDao.find(userId);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return userDao.findByUsername(username);
    }

    ;
}
