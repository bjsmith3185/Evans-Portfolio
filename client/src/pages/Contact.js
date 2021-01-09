import React, { useState } from 'react';
import axios from 'axios';
import ContactComp from '../components/ContactComp';
import NavTabs2 from '../components/NavTabs2';
import e from 'express';

function Contact() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        subject: '',
        message: ''
    });

    // FIRST NAME event handler
    function onFirstNameChange(e) {
        setFormState({
            firstName: e.target.value
        })
    };
    // LAST NAME event handler
    function onLastNameChange(e) {
        setFormState({
            lastName: e.target.value
        })
    };
    // EMAIL event handler
    function onEmailChange(e) {
        setFormState({ email: e.target.value })
    };
    // OCCUPATION event handler
    function onOccupationChange() {
        setFormState({ occupation: e.target.value })
    };
    // SUBJECT event handler
    function onSubjectChange(e) {
        setFormState({ subject: e.target.value })
    };
    // MESSAGE event handler
    function onMessageChange(e) {
        setFormState({ message: e.target.value })
    };
    // Reset form event handler
    function resetForm() {
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            message: ''
        })
    }
    // Form submit event handler
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: formState
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    };


    return (
        <div>
            <NavTabs2 />
            <ContactComp
                firstNameChange={onFirstNameChange}
                lastNameChange={onLastNameChange}
                emailChange={onEmailChange}
                occupationChange={onOccupationChange}
                subjectChange={onSubjectChange}
                messageChange={onMessageChange}
                submit={handleSubmit}
            />
        </div>
    )
};

export default Contact;