import Project from "./Project";

const Projects = () => {
    return(
        <> 
        <h3>Web Development </h3>
        <div className="prodcontainer">
        <div id="webdev">
        <Project link="https://github.com/Ownerman123/Trying-to-sell" imgurl="./trytosell.png" imgalt='Try To sell. online "market" ' first={true} />
        <Project link="https://ownerman123.github.io/Weather-Forecast/" imgurl="./WeatherWizard.png" imgalt="Weather Wizard. a forcasting app" />
        <Project link="https://github.com/Ownerman123/MVC-Tech-Blog" imgurl="./BlogNAhome.png" imgalt="BlogNA the meatiest coding blog on the web" />
        <Project link="https://ricardoshade.github.io/FrugalChef/" imgurl="./recipeRoulette.png" imgalt="Recipe Roulette, a recipe randomizer" />
        <Project link="https://pwa-texteditor-qjij.onrender.com/" imgurl="./jate.PNG" imgalt="jate, a text editor " />
        <Project link="https://ownerman123.github.io/Task-Board/" imgurl="./taskBoard.PNG" imgalt="Task Board" />
        <Project link="https://github.com/Ownerman123/SVG-Logo_generator" imgurl="./SVG-Gen.PNG" imgalt="An SVG generating app for simple logos" />
        <Project link="https://ownerman123.github.io/Matching-Game/" imgurl="./megamatcher.PNG" imgalt="A matching game built with javascript." />
        <Project link="https://github.com/Ownerman123/E-Commerce-Back-end" imgurl="./ecomerceBackend.PNG" imgalt="RESTfull api for an ecommerce site" />
        </div>
        </div>

        <h3>Game Design</h3>
        <div className="prodcontainer">
        <div id="gamedes">
            <Project link="https://www.printables.com/model/797520-iceolation" imgurl="/iceolation.jpg" imgalt="justme" />
            <Project link="https://ownerman123.itch.io/steak-cuts" imgurl="/SteakCuts.png" imgalt="justme" />
        </div>
        </div>

        <h3>Other</h3>
        <div className="prodcontainer">
        <div id="other">
        <Project link="https://ownerman123.github.io/My-portfolio/album.html" imgurl="/ItsChristmasBaby.png" imgalt="my Christmas album" />
        </div>
        </div>
        </>
    )
}

export default Projects;