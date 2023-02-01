import classes from './ItemInfo.module.css'
import { useLocation } from 'react-router-dom';
import React, {useEffect,useReducer,useContext} from 'react';
import AvailableTopping from './Topping/AvailableTopping';
import CartContext from '../../../../store/cart-context';

function ItemInfo() {
    const location = useLocation()
    const itemDefaultState = {
        ...location.state,
        size:location.state.baseSize,
        dsc:location.state.baseSize,
        toppings:[],
        basePrice:location.state.listedPrice[0],
        totalPrice:location.state.listedPrice[0],
        totalAmount:1,
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
                const dsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
                updatedItem.totalPrice = updatedTotalPrice
                updatedItem.baseSize = action.context
                updatedItem.dsc= dsc 
                return updatedItem
            }     
            if(action.context==='L')
            {
                const updatedItem ={...state,basePrice:state.listedPrice[1]}
                const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
                const dsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
                updatedItem.totalPrice = updatedTotalPrice
                updatedItem.baseSize = action.context
                updatedItem.dsc= dsc 
                return updatedItem
            }

        }else if(action.type==='addTopping'){
            const updatedToppings = [...state.toppings,action.topping].sort((a, b) =>
            a.name.localeCompare(b.name));
            const updatedItem = {
                ...state,
                toppings:updatedToppings
            }
            const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
            const dsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
            updatedItem.totalPrice = updatedTotalPrice
            updatedItem.dsc= dsc 
            return updatedItem
        }else if(action.type==='removeTopping'){
            const updatedToppings =  state.toppings.filter(topping => topping !== action.topping);
            const updatedItem = {
                ...state,
                toppings:updatedToppings
            }
            const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
            const dsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
            updatedItem.totalPrice = updatedTotalPrice
            updatedItem.dsc= dsc 
            return updatedItem
        }

    }

    const[itemState,dispatchItemAction] = useReducer(itemReducer,itemDefaultState)
    
    
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
          ...itemState
        });
      };


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
                        <div className={classes.size}>
                            <span>Size:
                                <ul>
                                    {itemState.listedPrice.length >= 1 && <li><button className={classes.active}>M</button></li>}
                                    {itemState.listedPrice.length === 2 && <li><button >L</button></li>}
                                </ul>
                            </span>
                            <span className={classes.price}>{(itemState.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}<sup>đ</sup></span>
                        </div>
                        <AvailableTopping onDispatchItemAction={dispatchItemAction}></AvailableTopping>
                        <button className='btn' onClick={addToCartHandler}>Thêm Vào GiỎ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;