package com.projectAPI.projectAPI;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectApiApplication {

	public static void main(String[] args) {

		SpringApplication.run(ProjectApiApplication.class, args);
	}

}
