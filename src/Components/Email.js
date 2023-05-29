import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js"
import { collection, getDocs, getDoc, updateDoc, increment } from 'firebase/firestore'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animate__fadeInDown } from 'animate.css'

const Email = () => {
    //using refs to get information
    const form = useRef()
    const name = useRef()
    const email = useRef()
    const message = useRef()
    //makes an array of objects
    const [names, setNames] = useState([])
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        getData()
    }, [])

    //runs on change of the state variable "names"
    useEffect(() => {
        console.log(names)
    }, [names])

    //get doc gets one document while get docs retrives multiple
    const getData = () => {
        const counterCollectionRef = doc(db, 'email_counter', 'email_counter')
        getDoc(counterCollectionRef).then(response => {

            setCounter(response.data())

        }).catch(error => console.log("error"))

        const nameCollectionRef = collection(db, 'users')
        getDocs(nameCollectionRef).then(response => {
            const rawNames = response.docs.map(doc => ({
                //retrives names
                data: doc.data(),
                //retrives doc id
                id: doc.id
            }))
            setNames(rawNames)
        }).catch(error => console.log('error'))
    }

    const sendData = () => {
        const sendDataRef = doc(collection(db, 'users'))
        const incrementDataRef = doc(db, 'email_counter', 'email_counter')
        setDoc(sendDataRef, {
            name: name.current.value,
            email: email.current.value
        }).then(response => {

        }).catch(error => {
            console.warn('error')
        })

        updateDoc(incrementDataRef, {
            counter: increment(1)
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault()

        //shortened refrences to the value of each ref
        const nameRef = name.current.value
        const emailRef = email.current.value
        const messageRef = message.current.value

        if (nameRef.length <= 3 && emailRef.length <= 3 && messageRef.length <= 3) {
            window.confirm('Please type more')
        } else {
            sendData()
        }

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
            <div className='form-container'>

                <AnimationOnScroll animateIn='animate__fadeInDown' delay={1000}>
                    <div className="container-1">

                        <form className="form" ref={form} onSubmit={sendEmail}>

                            <div className="descr">Contact me</div>
                            <div className="input">
                                <input ref={name} name='user_name' required="" autocomplete="off" type="text" />
                                <label for="user_name">Name</label>
                            </div>

                            <div className="input">
                                <input ref={email} required="" autocomplete="off" name="user_email" type="text" />
                                <label for="user_email">E-mail</label>
                            </div>

                            <div className="input">
                                <textarea ref={message} name='message' required="" cols="30" rows="1" id="message"></textarea>
                                <label for="message">Message</label>
                            </div>

                            <button type='submit' name='submit_button'>Send message →</button>
                            <h4 className='data'>Emails sent: {counter.counter}</h4>
                        </form>

                    </div>
                </AnimationOnScroll>

            </div>
        </>
    );
};

export default Email;


