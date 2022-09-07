import React, { useState } from 'react';


function Menudata(props) {
    const[state,setState]=useState("secondary")
     const[count,setCount]=useState({eprice:""})
     const[fcount,setFcount]=useState(0)
   
   
    
    let fun=()=>{
        setState("danger")
    }
  const handleclick=()=>{
    props.show(props.price)
    console.log(props.price)
    setCount({eprice:props.price})
    setFcount(fcount+1)
   
  }
  const handleremove=()=>{
    setFcount(fcount-1) 
  fcount<=1?setState("secondary"):setState("danger")
  }
  

    return (
        <div>
   
           <div className="card mt-5 "   >
  <img className="card-img-top" src={props.image} alt="Card image cap"  style={{"height":"200px"}}/>
  <div className="card-body">
    <p className="card-text"><h5>{props.name}</h5> </p>
    <p className="card-text">Price : {props.price}</p>
 
  {fcount==0?"":<p className="card-text"><h5>Total : {fcount} </h5>
  <br /> Cost : {count.eprice*fcount}
  
   </p>
  
}
           {/* <button type="button"  className="btn btn-primary mx-2"  onClick={()=>{ props.show(props.price)}}  > */}
           <button type="button"  className="btn btn-primary mx-2"  onClick={handleclick}  >
 +
</button>

<button type="button" className={`btn btn-${state}`}  onClick={handleremove}    >-</button>
   
  </div>
 
</div>
</div>

    );
}

export default Menudata;