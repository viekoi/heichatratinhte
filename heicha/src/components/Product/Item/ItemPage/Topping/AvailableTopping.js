import classes from './AvailableTopping.module.css'
// import React, { useState } from 'react';
import ToppingList from './ToppingList';

const DUMMY_ITEMS = {
    topping:{
        items:[
            {
                name:"Trân Châu Đen",
                id:"tp-01",
                price:5.00,
                imgUrl:`/assets/img/tp-01.png`
            },
            {
                name:"Trân Hoàng Kim",
                id:"tp-02",
                price:5.00,
                imgUrl:`/assets/img/tp-02.png`
            },
            {
                name:"Khoai Dẻo",
                id:"tp-03",
                price:7.00,
                imgUrl:`/assets/img/tp-03.png`
            },
            {
                name:"Macchiato",
                id:"tp-04",
                price:10.00,
                imgUrl:`/assets/img/tp-04.png`
            },
            {
                name:"Cao Quy Linh",
                id:"tp-05",
                price:10.00,
                imgUrl:`/assets/img/tp-05.png`
            },
            {
                name:"Phô Mai Tươi",
                id:"tp-06",
                price:10.00,
                imgUrl:`/assets/img/tp-06.png`
            },
        ]
    }
}

function AvailableTopping(props) {

    // const [showToppingList,setShowToppingList] = useState(false)

    // const setShowToppingListHandler = ()=>{
    //     setShowToppingList(!showToppingList)
    // }
    
    return ( 
        <div className={classes[`available-topping`]}>
            <button className={classes[`slide-down`]}>Topping <i className="fa-solid fa-caret-down"></i></button>
           <ToppingList onDispatchItemAction={props.onDispatchItemAction} topping={DUMMY_ITEMS.topping.items}></ToppingList>
        </div>
        
    );
}

export default AvailableTopping;