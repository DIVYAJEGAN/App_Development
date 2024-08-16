package com.example.petcareboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petcareboot.model.Contact;


public interface ContactRepo extends JpaRepository<Contact,Long>{

    
} 