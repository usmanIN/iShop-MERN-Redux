import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


export default function Header(){
  const [categories, setCategories] = React.useState([]);
  const fetchCategory = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories").catch(error => console.log(error));        
    setCategories(response.data);
  }
  React.useEffect(function(){
      fetchCategory();
  },[])                          

  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2>Redux Ecommerce Shop</h2>            
        </div>
        <div className='ui container center'>
              <Link to={'/'}>HOME</Link> 
              { categories.length > 0 && categories.map((item,id) => <Link to={`/product/category/${item}`} key={id}>{item.toUpperCase()}</Link>) }
        </div>
        <div className='ui container center'>
            <Link to={'/cart'}>Carts: {}</Link>
        </div>        
    </div>
  )

}

