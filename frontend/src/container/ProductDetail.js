import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectProduct } from "../redux/actions/productAction";
import { addProductFromCart } from "../redux/actions/cartAction";

export default function ProductDetail(){
    const {productID} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    
    const fetchProduct= async () => {
        const response =  await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((error) => console.log(error));
        dispatch(selectProduct(response.data));
    }
    useEffect(() => {
        if(productID && productID !== '') fetchProduct();
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[productID]);

    function addCart(){
        dispatch(addProductFromCart(product))
    } 

    return(
        <div className="ui grid container">
            {
                Object.keys(product).length === 0 ?(
                    <div className="ui center fixed">
                          <div className="ui large text loader">Loading</div>
                    </div>      
              ):(
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND </div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={product.image} alt={product.title} />
                                </div>
                                <div className="column rp">
                                    <h1>{product.title}</h1>
                                    <h2 className="ui teal tag label">$ {product.price}</h2>
                                    <h3 className="ui brown block header">{product.category}</h3>
                                    <p>{product.description}</p>
                                    <div className="ui vertical animated button" tabIndex="0"  onClick={addCart}>
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>                           
                                        <div className="visible pink content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                )
            }
        </div>
    )
}
