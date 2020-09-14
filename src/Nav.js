

import React from 'react';
import { Link } from 'react-router-dom';



function Nav (){
    
      return (
        <div className="container">
        <ul className="nav">
              <span><h2> OVER<strong>WOOD</strong></h2></span>
              <li className="nav1"><Link to= "/home">Our products</Link></li>
              <li className="nav1"><Link to= "/">FAQs</Link></li>
              <li className="nav1"><Link to= "/">Contact</Link></li>
              <li className="nav1"><Link to= "/">Blog</Link></li>
              <li className="nav1"><Link to= "/">6 things about us</Link></li>
              <li className="nav1"> <button className="log" type="submit"> Log in</button></li>
              <li className="nav1"> <button className="create" type="submit"> Create account</button></li>
          </ul>
    </div>
          
          
          
          
    
      );
    
  }
  
  export default Nav;
  
