import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css';

const Review = (props) => {
    const{handleRemove, product}=props;
    const{name,price,quantity,img,shipping}=props.product
    return (
        <div className="parent">
            <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                        {name.length>20? name.slice(0,20)+"..." :name}
                        </p>
                  <p>Price: <span style={{color:"orange"}}>{price}$</span></p>
                  <p><small>Shipping:{shipping}</small></p>
                  <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-button">
                    <button onClick={()=>handleRemove(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;