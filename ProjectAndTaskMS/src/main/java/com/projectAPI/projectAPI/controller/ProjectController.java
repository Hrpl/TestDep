package com.projectAPI.projectAPI.controller;

import com.projectAPI.projectAPI.models.Project;
import com.projectAPI.projectAPI.models.Users;
import com.projectAPI.projectAPI.models.UsersProjects;
import com.projectAPI.projectAPI.services.ProjectRerository;
import com.projectAPI.projectAPI.services.UserRepository;
import com.projectAPI.projectAPI.services.UsersProjectsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/ps")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private final ProjectRerository projectRerository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final UsersProjectsRepository usersProjectsRepository;

    public ProjectController(ProjectRerository projectRerository,
                             UserRepository userRepository,
                             UsersProjectsRepository usersProjectsRepository){
        this.projectRerository = projectRerository;
        this.userRepository = userRepository;
        this.usersProjectsRepository = usersProjectsRepository;
    }

    @GetMapping("/findByUser/{login}/")
    Iterable<Project> findByUser(@PathVariable String login){
        var user = userRepository.findFirstByLogin(login).get(); // сначало ищется пользователь с таким логином

        var userprojects = usersProjectsRepository.findProjectIdByUserId(user.getId()); // находятся все id проектов, в каких участвует этот пользователь

        var projects = projectRerository.findALlByIdIn(userprojects).get(); // находит эти проекты по списку id

        return projects;
    }
}