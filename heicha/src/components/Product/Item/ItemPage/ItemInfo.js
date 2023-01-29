import classes from './ItemInfo.module.css'
import { useLocation } from 'react-router-dom';
import React, {useEffect,useReducer,useState} from 'react';
import AvailableTopping from './Topping/AvailableTopping';


function ItemInfo() {
    const location = useLocation()
    const itemDefaultState = {
        ...location.state,
        toppings:[],
        basePrice:location.state.listedPrice[0],
        totalPrice:location.state.listedPrice[0]
    }

    const setBasePriceHandler = (context) => {
        dispatchItemAction({ type:'setBasePrice',context:context});
      };

    const itemReducer = (state,action) =>{
        if(action.type==='setBasePrice'){
            if(action.context==='M'){
                const updatedItem ={...state,basePrice:state.listedPrice[0]}
                const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,
                0)
                updatedItem.totalPrice = updatedTotalPrice
                return updatedItem
            }     
            if(action.context==='L')
            {
                const updatedItem ={...state,basePrice:state.listedPrice[1]}
                const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
                updatedItem.totalPrice = updatedTotalPrice
                return updatedItem
            }

        }else if(action.type==='addTopping'){
            const updatedToppings = [...state.toppings,action.topping]
            const updatedItem = {
                ...state,
                toppings:updatedToppings
            }
            const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
            updatedItem.totalPrice = updatedTotalPrice
            return updatedItem
        }else if(action.type==='removeTopping'){
            const existingToppingIndex = state.toppings.findIndex((topping)=>
                topping.id==action.topping.id
            )
            const updatedToppings =  state.toppings.filter(topping => topping.id !== action.topping.id);
            const updatedItem = {
                ...state,
                toppings:updatedToppings
            }
            const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
            updatedItem.totalPrice = updatedTotalPrice
            return updatedItem
        }

    }

    const[itemState,dispatchItemAction] = useReducer(itemReducer,itemDefaultState)
    console.log(itemState)


    useEffect(() => {
        const sizeBtn = document.querySelector(`.${classes.size} ul`)
        sizeBtn.addEventListener("click", (e) => {
            const curActiveBtn = document.querySelector(`.${classes.active}`)
            const clickedBtn = e.target.closest("button")
            if (clickedBtn && curActiveBtn) {
                setBasePriceHandler(clickedBtn.textContent)
                curActiveBtn.classList.remove(`${classes.active}`)
                clickedBtn.classList.add(`${classes.active}`)
            }
        })
    }, []);

    return (
        <div className="grid wide">
            <div className={classes[`item-info`]}>
                <div className=""><h1>{itemState.name}</h1></div>
                <div className={`${classes.content}`}>
                    <div className={`l-4 m-6 c-12 ${classes.img}`}>
                        <img src={itemState.imgUrl} alt="" />
                    </div>
                    <div className={`l-4  m-6 c-12 ${classes[`buy-section`]}`}>
                        <p>{itemState.dsc}</p>
                        <div className={classes.size}>
                            <span>Size:
                                <ul>
                                    {itemState.listedPrice.length >= 1 && <li><button className={classes.active}>M</button></li>}
                                    {itemState.listedPrice.length == 2 && <li><button >L</button></li>}
                                </ul>
                            </span>
                            <span className={classes.price}>{(itemState.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}<sup>đ</sup></span>
                        </div>
                        <AvailableTopping onDispatchItemAction={dispatchItemAction}></AvailableTopping>
                        <button className='btn'>Thêm Vào GiỎ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;