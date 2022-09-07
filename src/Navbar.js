import React from 'react';

function Navbar(props) {
    
    return (
        <div className='mb-5'>



<nav className="navbar fixed-top navbar-expand-lg navbar-primary bg-primary">
  <div className="container-fluid">
    
    
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{"color":"White" ,"margin-left":"20px"}}>
    
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='white'><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
         <h4 style={{"color":"White" ,"margin-left":"20px"}}>Food's Restaurant</h4>
      </ul>
     
 
    </div>
  </div>
</nav>


            
        </div>
    );
}

export default Navbar;