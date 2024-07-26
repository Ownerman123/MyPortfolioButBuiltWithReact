import Project from "./Project";

const Projects = () => {
    return(
        <> 
        <h3>Web Development </h3>
        <div className="prodcontainer">
        <div id="webdev">
        <Project link="https://www.google.com/" imgurl="https://placehold.co/600x400" imgalt="justme" first={true} />
        <Project link="https://www.google.com/" imgurl="https://placehold.co/900x400" imgalt="justme" />
        <Project link="https://www.google.com/" imgurl="https://placehold.co/900x400" imgalt="justme" />
        <Project link="https://www.google.com/" imgurl="https://placehold.co/900x400" imgalt="justme" />
        </div>
        </div>

        <h3>Game Design</h3>
        <div className="prodcontainer">
        <div id="gamedes">
            <Project link="https://www.printables.com/model/797520-iceolation" imgurl="/iceolation.jpg" imgalt="justme" />
        </div>
        </div>

        <h3>Other</h3>
        <div className="prodcontainer">
        <div id="other">
        <Project link="https://ownerman123.github.io/My-portfolio/album.html" imgurl="https://placehold.co/600x400" imgalt="my Christmas album" />
        </div>
        </div>
        </>
    )
}

export default Projects;