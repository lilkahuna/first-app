//import { Link } from 'react-router-dom';
import './Links.css';
import Typewriter from 'typewriter-effect'
import  {AnimationOnScroll}  from 'react-animation-on-scroll';
import animate__fadeInLeft from 'animate.css'
const Links = () => {
    return (

        <>

            <div className='container'>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <h1 className='main-h'>Hi, Im Brodie Liverman a Software Engineer and aspiring Cyber Security Analyst</h1>
                </AnimationOnScroll>
            </div>

            <div className='intro'>

                <p className='text'><Typewriter onInit={(typewriter) => { typewriter.typeString('I am a passionate Software Engineer from the United States. \
                    I strive to create an efficent and helpful product and Im also intrested in cyber security and networking.').start() }}></Typewriter>

                </p>
            </div>

            <div className="linked-div">
                <a href='https://github.com/lilkahuna' className='links'>
                    <img className='imgs-1' src='Git.png' alt="Git"></img>
                </a>
                <a href='https://www.youtube.com/channel/UCrl1UXwvzQ93XxckgZa7xFg' className='links'>
                    <img className='imgs-2' src='Youtube.png' alt="Yt"></img>
                </a>
                <a href='https://www.instagram.com/brodieliverman/' className='links'>
                    <img className='imgs-3' src='Instagram.png' alt="Insta"></img>
                </a>
            </div>

        </>
    )
}

export default Links;