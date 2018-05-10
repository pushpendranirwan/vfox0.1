package com.tmz.wm.vfox.platform.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.tmz.wm.vfox.platform.dao.UserDao;
import com.tmz.wm.vfox.platform.model.User;

@Repository
@Qualifier("userDao")
public class UserDaoImpl implements UserDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void add(User user){
        jdbcTemplate.update("INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
                user.getId(), user.getUsername(), user.getPassword());
    }

    public User find(int userId){
        User user = (User) jdbcTemplate.queryForObject("SELECT * FROM users where id = ? ",
                new Object[] { userId }, new BeanPropertyRowMapper<>(User.class));
        return user;
    }

	@Override
	public User findByUsername(String username) {
		 User user = (User) jdbcTemplate.queryForObject("SELECT * FROM users where username = ? ",
	                new Object[] { username }, new BeanPropertyRowMapper<>(User.class));
	        return user;
	}
}

