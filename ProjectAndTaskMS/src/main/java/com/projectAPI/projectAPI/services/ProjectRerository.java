package com.projectAPI.projectAPI.services;

import com.projectAPI.projectAPI.models.Project;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProjectRerository extends CrudRepository<Project, Long> {

    Optional<Iterable<Project>> findALlByIdIn(Iterable id);
}
