package com.example.petcareboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petcareboot.model.Contact;
import com.example.petcareboot.repository.ContactRepo;



@Service
public class ContactService {
    
    @Autowired
    ContactRepo contactRepo;

    @Autowired
    EmailService emailService;

    public Contact addDetails(Contact contact) {
        Contact savedContact = contactRepo.save(contact);
        
        // Send email notification
        String subject = "New Contact Message from " + contact.getName();
        String body = "Name: " + contact.getName() + "\nEmail: " + contact.getEmail() + "\nMessage: " + contact.getMessage();
        emailService.sendEmail("testdd2004@gmail.com", subject, body);
        
        return savedContact;
    }
}
