import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductCateogry(){

    const {productCat} = useParams();
    const [product,setProduct] = React.useState([]);
    async function fetchRecord(){
        const response = await axios.get(`https://fakestoreapi.com/products/category/${productCat}`).catch(error => console.log(error))
        setProduct(response.data);
    }
    React.useEffect(function(){
        if(productCat!=="") fetchRecord();        
        return () => {
            setProduct([])
        }
    },[productCat]);



    return(
        <div className="ui grid container">
       
            { product.length > 0 && product.map((item) => {
             return(                      
                 <div className="four wide column"    key={item.id}>
                    <Link to={`/product/${item.id}`}>
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
                    </Link>
                </div>
            )
         })}

    </div>
    
    
    )
}