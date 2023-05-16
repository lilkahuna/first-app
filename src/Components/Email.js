import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e7d5rye', 'template_usqbzod', form.current, 'YlBlgsE3qya_lU-_j')
            .then((result) => {
                console.log(result.text);
                window.confirm("Email sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default Email;


