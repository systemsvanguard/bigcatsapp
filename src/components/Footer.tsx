// src/components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (    
    <footer className="footer">
        <div className="section has-text-centered">
            <p>	&copy; 2024 - {new Date().getFullYear()} <span className="is-size-4 has-text-weight-bold">The 10 Largest Big Cats</span> | All rights reserved.
            </p>
            <p>
                Yet another coding practice portfolio site by <a href="https://ryanhunter.ca/" className="link_no_underline">Ryan Hunter</a> | GitHub handle <span style={{ color: '#008b00', fontWeight: 'bold', fontStyle: 'italic' }}><a href="https://github.com/systemsvanguard" className="link_no_underline">SystemsVanguard</a></span>.<br />
                Built using React, Typescript, JSON, Bootstrap Icons, Google Fonts, CSS, & and lots of love <span style={{ color: '#ff0000'}}>&#9829; </span>  <span style={{ color: '#00008b'}}>&#9825; </span>  <span style={{ color: '#00008b'}}>&#9829; </span> .
                <br />
            </p>
            <p>
                <Link className="link_no_underline mx-2" to="/">Home</Link> |  
                <Link className="link_no_underline mx-2" to="/resources">Resources</Link>  |  
                <Link className="link_no_underline mx-2" to="/about">About</Link>  |  
                <Link className="link_no_underline mx-2" to="/contacts">Contact</Link>  
                <br />
            </p>
        </div>
    </footer>
  );
};

export default Footer;
