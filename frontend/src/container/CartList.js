import React from 'react';
import {useSelector} from "react-redux";

export default function CartList(){
    const product = useSelector((state) => state.listCart.carts);    
    return(
        <div>
            
         { product.length > 0 && product.map((item) => {
             return(                      
                 <div className="four wide column"    key={item.id}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="image">
                                    <img src={item.image}  alt={item.title} />
                                </div>
                                <div className="content">
                                    <div className="header">{item.title}</div>
                                    <div className="meta price">$ {item.price}</div>
                                    <div className="meta">{item.category}</div>
                                </div>                
                            </div>                                
                        </div>
               </div>
            )
         })}
        </div>
    )
}