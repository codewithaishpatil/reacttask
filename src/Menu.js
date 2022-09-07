import React ,{useState,useRef} from 'react';
import Menudata from './Menudata';
import burger from './assets/burger.jpeg';
import coke from './assets/coke.jpeg';
import fries from './assets/fries.jpeg';
import pepsi from './assets/pepsi.jpeg';
import {Link} from "react-router-dom";
import Navbar from './Navbar';

function Menu(props) {


     const[count,setCount]=useState(0)
     const[fcount,setFcount]=useState(0)
     const [state, setState] = useState({ eprice: ""})
   const data= [
        {
            "name": "Hamburger",
            "price": "200",
            "image": burger
        },
        {
            "name": "Coke",
            "price": "100",
            "image": coke
        },
        {
            "name": "Fries",
            "price": "50",
            "image": fries
        },
        {
            "name": "Pepsi",
            "price": "50",
            "image": pepsi
        }

    ]


    const show=(price)=>{
       // ref.current.click();
        console.log(price)
        setState({
           eprice: price
        })

    }
    const showdata=()=>{
      ref.current.click();
  }
  
    
    const ref=useRef(null)
    const refClose=useRef(null)
    return (
        <div>


<button  ref={ref} type="button"  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

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
       Total(INR) : {fcount*count*state.eprice==0?state.eprice:fcount*count*state.eprice}
       
      </div>
      <div  className="modal-footer">
      <Link to ="/checkout">
      <button type="button"  className="btn btn-primary">SAVE AND CHECKOUT</button></Link>
        <button  ref={refClose} type="button"  className="btn btn-secondary" data-bs-dismiss="modal">CANCEL </button>
       
      </div>
      </div>
     
    </div>
  </div>
</div>




<button type="button"  className="btn btn-danger mx-2"  style={{"float":"right"}} onClick={showdata}   >
Card
</button>




            
<div className="container my-3 " >
           <div className='row style={{display:"flex"}}' >
          {data.map((element)=>{ return <div className=' col-md-4' key={element.image} >
          
            <Menudata  name={element.name}  image={element.image}  price={element.price} show={show}
           />
        
            </div>               
        
        })}
            </div></div>

        </div>
    );
}

export default Menu;