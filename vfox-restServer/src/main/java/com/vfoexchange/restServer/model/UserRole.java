package com.vfoexchange.restServer.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;


public class UserRole {

    private int id;
    private String Role;
    private String RoleState;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }

    public String getRoleState() {
        return RoleState;
    }

    public void setRoleState(String roleState) {
        RoleState = roleState;
    }
}
