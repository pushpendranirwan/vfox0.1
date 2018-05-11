package com.vfoexchange.platform.dao;

import com.vfoexchange.platform.model.User;

public interface UserDao {

	public void add(User user);

	public User find(int user);
	
	public User findByUsername(String username);

}
