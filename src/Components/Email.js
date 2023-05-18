import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'

const Email = () => {
    
    const form = useRef()
    const name = useRef()

    const sendEmail = (e) => {
        
        const data ={
            name: name.current.value
        }

        console.log(data?.name)
        e.preventDefault()
        /**emailjs.sendForm('service_e7d5rye', 'template_usqbzod', form.current, 'YlBlgsE3qya_lU-_j')
            .then((result) => {
                console.log(result.text);
                window.confirm("Attempting to send email...")
            }, (error) => {
                console.log(error.text);
            });**/

        //deletes everthing in the form
        //e.target.reset()
    }


    return (
        <>

            <div className="container-1">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="descr">Contact me</div>
                    <div className="input">
                        <input ref={name} name='user_name' required="" autocomplete="off" type="text"/>
                            <label for="user_name">Name</label>
                    </div>

                    <div className="input">
                        <input required="" autocomplete="off" name="user_email" type="text"/>
                            <label for="user_email">E-mail</label>
                    </div>

                    <div className="input">
                        <textarea name='message' required="" cols="30" rows="1" id="message"></textarea>
                        <label for="message">Message</label>
                    </div>

                    <button>Send message →</button>
                </form>
            </div>

        </>
    );
};

export default Email;


