package com.tmz.wm.vfox.platform.dao;

import com.tmz.wm.vfox.platform.model.User;

public interface UserDao {

	public void add(User user);

	public User find(int user);
	
	public User findByUsername(String username);

}
