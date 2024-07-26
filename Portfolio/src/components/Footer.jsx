

const Footer = () => {
 
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <a href="https://github.com/Ownerman123">
      <img src="/github.svg" alt="github" className="footerlink"/>
      </a>
      <a href="https://www.linkedin.com/in/charles-shumway-5287b12ba/">
      <img src="/linkedin.svg" alt="linkedin" className="footerlink"/>
      </a>
        <h4> &copy; {new Date().getFullYear()} - Charles Shumway</h4>
      </div>
    </footer>
  );
};

export default Footer;
 