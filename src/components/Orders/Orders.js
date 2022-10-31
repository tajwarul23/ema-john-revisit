import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const [products, setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemove=(productClicked)=>{
        const rest=cart.filter(pd=>pd.id !== productClicked.id);
        setCart(rest);
        removeFromDb(productClicked.id)
    }
    return (
        <div className="shop-container">
            <div className="review-item-container">
                {
                    cart.map(product=><Review 
                        handleRemove={handleRemove}
                    key={product.id}
                    product={product}
                    ></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><h3>Hello from orders</h3></Cart>
            </div>
        </div>
            
        
    );
};

export default Orders;