const Project = (props) => {
    let id;

    if(props.first){
         id = 'firstcard';
    }else{
         id = '';
    }

    return(
    <div className='projectcard' id={id}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.imgurl} alt={props.imgalt} className="projectimage"/>
        </a>
    </div>
    );
}

export default Project;