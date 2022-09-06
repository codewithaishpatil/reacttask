import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Menudata(props) {
    const[state,setState]=useState("secondary")
    const[count,setCount]=useState(0)
    const[fcount,setFcount]=useState(0)
   
    
    let fun=()=>{
        setState("danger")
    }
   

    return (
        <div>
           



<div  className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div  className="modal-dialog modal-dialog-centered">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title" id="staticBackdropLabel"><h5>Order Summary</h5></h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body">
       Coke   :   {count}   <button type="button"  className="btn btn-primary" style={{"marginLeft":"50%"}} onClick={()=>{setCount(count+1)}}>+</button>
       <button type="button"  className="btn btn-danger mx-3" onClick={()=>{setCount(count-1)}} >-</button>
      </div>
      
      <div  className="modal-body">
       Fries    :  {fcount}
       <button type="button"  className="btn btn-primary" style={{"marginLeft":"50%"}} onClick={()=>{setFcount(fcount+1)}}>+</button>
       <button type="button"  className="btn btn-danger mx-3" onClick={()=>{setFcount(fcount-1)}} >-</button>
      </div>
      <div  className="modal-body">
       Total(INR) :  {props.price}
       
      </div>
      <div  className="modal-footer">
      <Link to ="/checkout">
      <button type="button"  className="btn btn-primary">SAVE AND CHECKOUT</button></Link>
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">CANCEL </button>
       
      </div>
    </div>
  </div>
</div>
        
           <div className="card mt-5 "   >
  <img className="card-img-top" src={props.image} alt="Card image cap"  style={{"height":"200px"}}/>
  <div className="card-body">
    <p className="card-text"><h5>{props.name}</h5> </p>
    <p className="card-text">Price : {props.price}</p>
   
           <button type="button"  className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={()=>{ props.show(props.price)}}  >
 +
</button>
    <button type="button" className={`btn btn-${state}`} >-</button>
  </div>
  
</div>
</div>

    );
}

export default Menudata;