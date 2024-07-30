import Navigation from './Navigation'

const Header = ({currentpage, setpage}) => {


    // html to be loaded to dom
    return (
        <>
        <header>    
        <h1>Charles Shumway</h1>
        <Navigation currentpage={currentpage} setpage={setpage}/>
        </header>
        </>
    );

};

export default Header;