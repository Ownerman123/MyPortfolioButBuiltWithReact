import { Link } from "react-router-dom";

const Navigation = () => {


    // html to be loaded to dom
    return (
        <>
        <div id="navlinks">
        
        <Link to='/about'><h3 className="navlink">About Me</h3></Link>
        <Link to='/contact'><h3 className="navlink">Contact</h3></Link>
        <Link to='/portfolio'><h3 className="navlink">Projects</h3></Link>
        <Link to='/resume'><h3 className="navlink">Resume</h3></Link>
        </div>
        
        </>
    );

};

export default Navigation;