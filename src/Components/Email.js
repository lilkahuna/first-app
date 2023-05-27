import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
import { setDoc, doc } from "firebase/firestore";
import { db, fireBaseConfig } from "./firebase.js"
import { collection, getDocs, updateDoc, increment } from  'firebase/firestore'

const Email = () => {
    //using refs to get information
    const form = useRef()
    const name = useRef()
    //makes and array of objects
    const [names, setNames] = useState([])
    const [counter, setCounter] = useState(0)

    
    useEffect(()=> {
        getData()
    }, [])

    //runs on change of the state variable "names"
    useEffect(() => {
        console.log(names)
        console.log(counter)
    }, [names])

    const getData = () =>{
        const counterCollectionRef = collection(db, 'email_counter')
        getDocs(counterCollectionRef).then(response => {
            const rawCounter = response.docs.map(doc=>({
                counter_number: doc.data(),
                id: doc.id
            }))
            setCounter(rawCounter)
        }).catch(error=> console.log("error"))

        const nameCollectionRef = collection(db, 'users')
        getDocs(nameCollectionRef).then(response =>{
            const rawNames = response.docs.map(doc =>({
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
            name: name.current.value
        }).then(response => {
            console.log(response)

        }).catch(error => {
            console.warn('error')})

        updateDoc(incrementDataRef, {
            counter: increment(1)
        })
    }

    const sendEmail = async(e) => {
        e.preventDefault()
        sendData()

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

                    <button type='submit' name='submit_button'>Send message →</button>
                    
                </form>
                
            </div>

        </>
    );
};

export default Email;


