package com.tmz.wm.vfox.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = { "com.tmz.wm" })
@PropertySources({ @PropertySource(value = "classpath:application.properties") })
@CrossOrigin(allowedHeaders="*",allowCredentials="true")
@EnableResourceServer
@Configuration
public class CoreWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoreWebApplication.class, args);
	}
}
