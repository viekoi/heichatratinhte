import classes from './ToppingItem.module.css'
import React, { useState} from 'react';


function ToppingItem(props) {
   const toppingHander = (selected)=>{
        if(selected === false){
            props.onDispatchItemAction({ type:'addTopping',topping:props.item})
        }else{
            props.onDispatchItemAction({ type:'removeTopping',topping:props.item})
        }
   }

   const[selected,setSelected] = useState(false)

   const setSelectedHandler = ()=>{
        setSelected(!selected)
        toppingHander(selected)
   }

    return (  
        <li key={props.item.id} className={`${classes[`topping-item`]} ${selected ?"active":""}`} onClick={setSelectedHandler}>
                <div className={classes.dsc}>
                    <button><img src={props.item.imgUrl} alt="" /></button>
                    <span>{props.item.name}</span>
                </div>
                <div >
                    <span className={classes.price}>+{(props.item.price*1000).toLocaleString({ style: "currency", currency: "VND" })}<sup>đ</sup></span>
                    <span className={classes.check}><i className="fa-solid fa-check"></i></span>
                </div>
            </li>
    );
}

export default ToppingItem;