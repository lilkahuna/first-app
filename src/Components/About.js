import { TypewriterClass } from 'typewriter-effect';
import './About.css'
import  {AnimationOnScroll}  from 'react-animation-on-scroll';
import {animate__fadeInLeftBig, animate__fadeInUp, animate__fadeInRightBig} from 'animate.css'

const About = () => {
    return (
        <>
            <AnimationOnScroll animateIn='animate__fadeInLeft' delay={100}>
                <h1 className="about-heading">Where Did I Start?</h1>
            </AnimationOnScroll>

            <div className="About-div">
                <div className="about-content">
                    
                    <AnimationOnScroll animateIn='animate__fadeInRightBig' delay={1200}>
                    <p className="about-text">
                        My name is Brodie Liverman and I am an aspiring software engineer and cyber security analyst. Over the past year, I have developed proficiency in multiple programming languages, including Python, JavaScript and Java. My interest in programming was sparked during a Python course I took as a child, but I did not pursue it until I enrolled in a STEM academy in my freshman year.
                    </p>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__fadeInLeftBig' delay={1400}>
                    <p className="about-text">
                        At the academy, I completed a fundamentals class, which enabled me to take an introductory programming class. This class started with Java, but we soon moved on to Unity and worked with C#. I found programming so engaging that I continued to learn even after the class ended. This led me to explore additional languages, such as Python and JavaScript.
                    </p>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__fadeInRightBig' delay={1600}>
                    <p className="about-text">
                        As my skills developed, I began working with HTML, CSS, and React, which I used to build the website that you are currently viewing. My passion for programming and my desire to become a software engineer and cyber security analyst continue to drive my learning and development in this field.
                    </p>
                    </AnimationOnScroll>

                </div>

                <AnimationOnScroll animateIn='animate__fadeInUp' delay={800}>
                    <div className='about-images'>
                        <img className='images' src='python.png'></img>
                        <img className='images' src='logo512.png'></img>
                    </div>
                </AnimationOnScroll>
            </div>
        </>

    )

}

export default About;