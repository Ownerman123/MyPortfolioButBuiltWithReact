import Project from "./Project";

const Projects = () => {
    return(
        <> 
        <h3>Web Development </h3>
        <div className="prodcontainer ">
        <div id="webdev">
        {/* <Project link="https://github.com/Ownerman123/Trying-to-sell" gitlink="https://github.com/Ownerman123/Trying-to-sell" imgurl="./trytosell.png" imgalt='Try To sell. online "market" '  /> */}
        <Project link="https://superdinnerplanner.netlify.app" gitlink="https://github.com/Ownerman123/dinnerplanner" imgurl="./Dinnerplanner.png" imgalt="Dinner planner, plan dinner and the shopping list at the same time" first={true} />
        <Project link="https://ownerman123.github.io/Weather-Forecast/" gitlink="https://github.com/Ownerman123/Weather-Forecast" imgurl="./WeatherWizard.png" imgalt="Weather Wizard. a forcasting app" />
        {/* <Project link="https://github.com/Ownerman123/MVC-Tech-Blog" gitlink="https://github.com/Ownerman123/MVC-Tech-Blog" imgurl="./BlogNAhome.png" imgalt="BlogNA the meatiest coding blog on the web" /> */}
        <Project link="https://ricardoshade.github.io/FrugalChef/" gitlink="https://github.com/ricardoshade/FrugalChef" imgurl="./recipeRoulette.png" imgalt="Recipe Roulette, a recipe randomizer" />
        <Project link="https://pwa-texteditor-qjij.onrender.com/" gitlink="https://github.com/Ownerman123/PWA-textEditor" imgurl="./jate.PNG" imgalt="jate, a text editor " />
        <Project link="https://ownerman123.github.io/Task-Board/" gitlink="https://github.com/Ownerman123/Task-Board" imgurl="./taskBoard.PNG" imgalt="Task Board" />
        <Project link="https://github.com/Ownerman123/SVG-Logo_generator" gitlink="https://github.com/Ownerman123/SVG-Logo_generator" imgurl="./SVG-Gen.PNG" imgalt="An SVG generating app for simple logos" />
        <Project link="https://ownerman123.github.io/Matching-Game/" gitlink="https://github.com/Ownerman123/Matching-Game" imgurl="./megamatcher.PNG" imgalt="A matching game built with javascript." />
        <Project link="https://github.com/Ownerman123/E-Commerce-Back-end" gitlink="https://github.com/Ownerman123/E-Commerce-Back-end" imgurl="./ecomerceBackend.PNG" imgalt="RESTfull api for an ecommerce site" />
        </div>
        </div>

        <h3>Game Design</h3>
        <div className="prodcontainer">
        <div id="gamedes">
            <Project link="https://www.printables.com/model/1055513-iceloation-board-game" imgurl="/iceolation.jpg" imgalt="Iceolation" />
            <Project link="https://ownerman123.itch.io/steak-cuts" imgurl="/SteakCuts.png" imgalt="Steak Cuts Game" />
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