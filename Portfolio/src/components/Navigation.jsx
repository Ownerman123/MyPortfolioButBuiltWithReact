import { Link } from "react-router-dom";

const Navigation = ({currentpage, setpage}) => {

   

    switch (currentpage) {
        case 'about':
           return( <>
            <div id="navlinks">
            
            <Link to='/about'><h3 className="navlink selectedlink" onClick={()=> setpage('about')}>About Me</h3></Link>
            <Link to='/contact'><h3 className="navlink" onClick={()=> setpage('contact')}>Contact</h3></Link>
            <Link to='/portfolio'><h3 className="navlink" onClick={()=> setpage('portfolio')}>Projects</h3></Link>
            <Link to='/resume'><h3 className="navlink" onClick={()=> setpage('resume')}>Resume</h3></Link>
            </div>
            
            </>
           );
            
           case 'contact':
            return( <>
             <div id="navlinks">
             
             <Link to='/about'><h3 className="navlink" onClick={()=> setpage('about')}>About Me</h3></Link>
             <Link to='/contact'><h3 className="navlink selectedlink" onClick={()=> setpage('contact')}>Contact</h3></Link>
             <Link to='/portfolio'><h3 className="navlink" onClick={()=> setpage('portfolio')}>Projects</h3></Link>
             <Link to='/resume'><h3 className="navlink" onClick={()=> setpage('resume')}>Resume</h3></Link>
             </div>
             
             </>
            );
            case 'portfolio':
                return( <>
                 <div id="navlinks">
                 
                 <Link to='/about'><h3 className="navlink" onClick={()=> setpage('about')}>About Me</h3></Link>
                 <Link to='/contact'><h3 className="navlink" onClick={()=> setpage('contact')}>Contact</h3></Link>
                 <Link to='/portfolio'><h3 className="navlink selectedlink" onClick={()=> setpage('portfolio')}>Projects</h3></Link>
                 <Link to='/resume'><h3 className="navlink" onClick={()=> setpage('resume')}>Resume</h3></Link>
                 </div>
                 
                 </>
                );
                case 'resume':
                    return( <>
                     <div id="navlinks">
                     
                     <Link to='/about'><h3 className="navlink" onClick={()=> setpage('about')}>About Me</h3></Link>
                     <Link to='/contact'><h3 className="navlink" onClick={()=> setpage('contact')}>Contact</h3></Link>
                     <Link to='/portfolio'><h3 className="navlink" onClick={()=> setpage('portfolio')}>Projects</h3></Link>
                     <Link to='/resume'><h3 className="navlink selectedlink" onClick={()=> setpage('resume')}>Resume</h3></Link>
                     </div>
                     
                     </>
                    )   ;             
        default:
           
            return (
                <>
                <div id="navlinks">
                
                <Link to='/about'><h3 className="navlink" onClick={()=> setpage('about')}>About Me</h3></Link>
                <Link to='/contact'><h3 className="navlink" onClick={()=> setpage('contact')}>Contact</h3></Link>
                <Link to='/portfolio'><h3 className="navlink" onClick={()=> setpage('portfolio')}>Projects</h3></Link>
                <Link to='/resume'><h3 className="navlink" onClick={()=> setpage('resume')}>Resume</h3></Link>
                </div>
                
                </>
            );
    }


    // html to be loaded to dom

};

export default Navigation;