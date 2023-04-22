import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return(
    <div className='navbar'>
        <h1>Navigation</h1>
        
        <Link to='/'><button className='side-buttons'>Home</button></Link>
        <Link to='/aboutme'><button className='side-buttons'>About Me</button></Link>
        <button className='side-buttons'>My Project Portfolio</button>
        
        <a href=' https://mail.google.com?view=cm&fs=1&to=Brodie.liverman@gmail.com'>
            <button className='side-buttons'>Contact Me</button>

        </a>
        
        <button className='side-buttons'>Report Bugs Or Issues With The Site</button>

    </div>

    )
}

export default Navbar;
