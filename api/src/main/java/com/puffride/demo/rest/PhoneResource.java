package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Phone;
import com.puffride.demo.dao.PhoneDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/phone")
public class PhoneResource {

    @Autowired
    PhoneDao dao;

    @GetMapping
    public List<Phone> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Phone read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Phone create(@RequestBody Phone entity){
        return dao.save(entity);
    }

    @PutMapping
    public Phone update(@RequestBody Phone entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Phone> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
