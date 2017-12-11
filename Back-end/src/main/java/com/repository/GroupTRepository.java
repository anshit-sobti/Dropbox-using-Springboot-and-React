package com.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.entity.GroupT;

public interface GroupTRepository extends CrudRepository<GroupT, Long> {
    // List<GroupT> find
    // List<User> find
    //List<GroupT> findBy(Integer group_id);

    GroupT findByGroupId(Integer group_id);
}
