
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProduct } from "../redux/actions/productAction";


const ProductComponent = () => {
    const product = useSelector((state) => state.allProducts.products);
    const dispatch =  useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log(err));
        dispatch(setProduct(response.data));
    }
    useEffect(() => {
        fetchProducts();
    },[]);


    return(
         <>
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
           
           </>
    )
}
export default ProductComponent;