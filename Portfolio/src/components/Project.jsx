const Project = (props) => {
    let id;
    let links;

    if(props.first){
         id = 'firstcard';
    }else{
         id = '';
    }

    if(props.gitlink){
        links = <>
        <a href={props.gitlink} target="_blank" rel="noopener noreferrer" className="gitlink">Github
        </a>
        </>;
    }else{
        links = <>
        
       </>;
    }

    return(
    <div className='projectcard ' id={id}>
        <div className="overlay ">
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="prodlink">
            <img src={props.imgurl} alt={props.imgalt} className="projectimage "/>
            </a>
        {links}
        </div>
    </div>
    );
}

export default Project;