import { useState } from 'react';
import { productType } from "../../Types/Types";
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../../Store";
import './shopping_cart.css';
import { NavLink } from 'react-router-dom';

const Buying_Product = ({ productData }: { productData: productType }) => {

    const [product_num, set_product_Num] = useState(productData.count ? productData.count : 1);

    const dispatch = useDispatch();

    const deleteFromSC = () => {
        dispatch({ type: 'delete', payload: productData });
        dispatch({ type: 'decrement', payload: productData.count });
    }
    const increaseProductNum = () => {
        set_product_Num(product_num + 1);
        dispatch({ type: 'increment', payload: 1 });
        dispatch({ type: 'change_count', payload: { ...productData, count: product_num + 1 } });
    }
    const decreaseProductNum = () => {
        if (product_num > 1) {
            set_product_Num(product_num - 1);
            dispatch({ type: 'decrement', payload: 1 })
            dispatch({ type: 'change_count', payload: { ...productData, count: product_num - 1 } });
        }
    }
    return (
        <div className="shopping_cart_flex">
            <div className="delete_btn_wrapper"><div className="delete_btn" onClick={deleteFromSC}><p>x</p></div></div>
            <div className="shopping_img_wrapper"><img src={productData.imgSrc} /></div>
            <div className="buying_product_text">
                <h1>{productData.name}</h1>
                <p>{productData.descript}</p>
            </div>
            <p className="shopping_item_price">{productData.total ? productData.total + '$' : productData.price + '$'}</p>
            <div className="product_num_changer">
                <button onClick={decreaseProductNum}>-</button>
                <p>{product_num}</p>
                <button onClick={increaseProductNum}>+</button>
            </div>
        </div>
    )
}

export const Shopping_Cart = () => {

    const orders = useSelector<storeType, productType[]>((state) => state.orders);
    let sum = 0;
    console.log(orders);
    orders.map((item) => sum += (item.total ? item.total : item.price));
    return (
        <div className="shopping_cart_container">
            {orders.length <= 0 &&
                <>
                <h1 id='empty_cart_text'>Oops...It looks like your cart is empty </h1>
                <button className='orange_btn empty_cart_button'><NavLink className='navlink' to='/menu'>To Menu</NavLink></button>
                </>}
            {orders.length > 0 &&
                <div className='shopping_cart_wrapper'>
                    {orders.length > 0 && orders.map((item, index) => { return <Buying_Product productData={item} key={index} /> })}
                    <div className='cart_total_block'>
                        <h1>CART TOTALS</h1>
                        <div className='cart_total_flex'><p>Subtotal</p><p>${sum.toFixed(1)}</p></div>
                        <div className='cart_total_flex'><p>Delivery</p><p>$0.00</p></div>
                        <div className='cart_total_flex'><p>Discount</p><p>$0.00</p></div>
                        <div className='cart_total_flex total_price'><p>TOTAL</p><p>${sum.toFixed(1)}</p></div>
                    </div>
                </div>
            }</div>)
}