package com.projectAPI.projectAPI.services;

import com.projectAPI.projectAPI.models.UsersProjects;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UsersProjectsRepository {
    private final JdbcClient jdbcClient;

    public UsersProjectsRepository(JdbcClient jdbcClient){
        this.jdbcClient = jdbcClient;
    }

    public List<Long> findProjectIdByUserId(Long userId){
        String requestStingSql = String.format( "select p.project_id from USERSPROJECTS p where p.user_id = '%d'",userId);

        return jdbcClient.sql(requestStingSql).query(Long.class).list();
    }
}
