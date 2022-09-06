import React from 'react';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
function Gotomenu(props) {
    return (
        <>


      
        <section className='container-fluid' style={{"display":"flex","justifyContent":"center","marginTop":"15%"}}>
      

             <h1> Welcome To Food's <br /><center>Kitchen</center><br /> 
             
             <center> <Link to ="/menu"><button type="button" class="btn btn-primary">GO TO MENU</button></Link></center>
             
            
             </h1> 
           
        </section>
        <section >
            
          
       </section>
       
        </>
    );
}

export default Gotomenu;