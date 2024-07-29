package com.projectAPI.projectAPI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "project_id")
    //@JsonManagedReference
    @JsonIgnore
    private Project project_id;

    private String description;

    @ManyToOne
    @JoinColumn(name = "executor_id")
    @JsonIgnore
    private Users executor;

    private LocalDate createDate;

    private LocalDate deadline;

    private LocalDate factEndDate;

    @ManyToOne
    @JoinColumn(name = "status_id")
    @JsonIgnore
    private StatusTask statusTask;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Project getProject() {
        return project_id;
    }

    public void setProject(Project project) {
        this.project_id = project;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Users getExecutor() {
        return executor;
    }

    public void setExecutor(Users executor) {
        this.executor = executor;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public LocalDate getFactEndDate() {
        return factEndDate;
    }

    public void setFactEndDate(LocalDate factEndDate) {
        this.factEndDate = factEndDate;
    }

}
