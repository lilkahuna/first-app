import './Github.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animate__fadeInLeft, animate__fadeInUpBig, animate__fadeInRight } from 'animate.css'

const Git = () => {

    //? is a safty operator
    return (

        <>
            <AnimationOnScroll animateIn='animate__fadeInRight'>

                <div className='git-div'>
                    <h1 className='main-head'>Projects I Have Done</h1>

                    <a className='linked' href='https://github.com/lilkahuna/Python-Projects/tree/main/Python%20Scripts'><div className='project-1'>

                        <h1>Basic Weather App</h1>

                        <div className='project1-body'>
                            <p>This is a basic weather app I created in Python. It utilizes a library called Custom Tkinter.
                                This app also uses http request to access weather information</p>
                        </div>
                    </div></a>

                    <a className='linked' href='https://github.com/lilkahuna/Python-Projects/tree/main/Python%20Scripts'><div className='project-2'>
                        <h1 className='pro-head'>Excel Script</h1>


                        <div className='project2-body'>
                            <p>This is a basic excel script I created in Python. It uses a library called Openpyxl which is used to add
                                functionality to the script. It was made for my dad so he could copy and paste to certain colums without ruining formating.</p>
                        </div>
                    </div></a>
                </div>
            </AnimationOnScroll>

        </>

    )
}

export default Git;
