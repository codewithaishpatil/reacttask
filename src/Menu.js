import React from 'react';
import Menudata from './Menudata';
import burger from './assets/burger.jpeg';
import coke from './assets/coke.jpeg';
import fries from './assets/fries.jpeg';
import pepsi from './assets/pepsi.jpeg';

function Menu(props) {
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

    const show=(id)=>{
 console.log(id)
    }
    return (
        <div>
            
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