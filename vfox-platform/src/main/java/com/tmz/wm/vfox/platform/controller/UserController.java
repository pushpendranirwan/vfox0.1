package com.tmz.wm.vfox.platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tmz.wm.vfox.platform.model.User;
import com.tmz.wm.vfox.platform.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/add/user", method = RequestMethod.POST)
	public String getAccountDetail(@RequestBody User user) {
		userService.addUser(user);
		return "OK";
	}

}
