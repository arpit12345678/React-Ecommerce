import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import currencyFormatter from "currency-formatter";
import {BsPlus,BsDash} from 'react-icons/bs';



const Details = () => {

    const [quantity,setQuantity]=useState(1);
    const {id}=useParams();
    const dispatch =useDispatch();
    const {product}=useSelector(state => state.ProductReducer);
  
    


    const check = ()=>{
        if(quantity >1){
            setQuantity(quantity-1)
        }
    }

    useEffect(()=>{
       dispatch ({type:"PRODUCT",id})
    },[id])
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt=""/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__price">
                        <span className="details__actual">
                        {currencyFormatter.format(product.price, { code: 'USD' })}
                                         
                        </span>
                        <span className="details__discount">
                        {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                         
                        </span>
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                        <span className="dec" onClick={check}>
                            <BsDash />
                        </span>
                        <span className="quantity">
                            {quantity}
                        </span>
                        <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                            <BsPlus />
                        </span>
                        <button className="btn-default" onClick={()=> dispatch ({type:'ADD_TO_CART',payload:{product,quantity}})}>
                            Add to Cart
                        </button>
                        </div>
                        <h4>Details: </h4>
                        <div className="details__p">
                            {product.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
