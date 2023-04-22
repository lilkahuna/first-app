//import { Link } from 'react-router-dom';
import './Links.css';


const Links = ()=>{
    return(
        
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
    )
}

export default Links;