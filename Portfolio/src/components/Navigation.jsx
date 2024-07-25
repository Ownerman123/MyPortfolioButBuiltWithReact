import { Link } from "react-router-dom";

const Navigation = () => {


    // html to be loaded to dom
    return (
        <>
        <div id="navlinks">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/about'><h3>About Me</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <Link to='/portfolio'><h3>Projects</h3></Link>
        <Link to='/resume'><h3>Resume</h3></Link>
        </div>
        
        </>
    );

};

export default Navigation;