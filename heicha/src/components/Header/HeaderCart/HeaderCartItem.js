import classes from './HeaderCartItem.module.css'
import ModalInput from '../../../ui/ModalInput';
import React, { useState } from 'react';

function HeaderCartItem(props) {
    const[modal,setModal] = useState(false)
    const setModalHandler = ()=>{
        setModal(!modal)
    }

    

    return (
        <li className={classes[`header-cart-item`]}>
            <div>
                <div className={classes.left}>
                    <img src={props.item.imgUrl} alt="" />
                </div>
                <div className={classes.right}>
                    <h4>{props.item.name}</h4>
                    <span className={classes.dsc}>{props.item.dsc}</span>
                    <div className={classes.form} > 
                        <span><button onClick={props.onCartItemRemoveHandler}>-</button><input onClick={setModalHandler} type="button" value={props.item.totalAmount} /><button onClick={props.onCartItemAddHandler}>+</button> </span>
                        <span>{(props.item.totalPrice *1000 * props.item.totalAmount ).toLocaleString({ style: "currency", currency: "VND" })} <sup>đ</sup></span>
                    </div>
                </div>
            </div>
            {modal && <ModalInput value={props.item.totalAmount} item={props.item} onCartItemUpdateHandler={props.onCartItemUpdateHandler} onClick={setModalHandler}></ModalInput>}
        </li>
    );
}

export default HeaderCartItem;