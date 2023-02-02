import classes from './ItemInfo.module.css'
import { useLocation } from 'react-router-dom';
import React, {useReducer,useContext,useState} from 'react';
import AvailableTopping from './Topping/AvailableTopping';
import CartContext from '../../../../store/cart-context';

function ItemInfo() {


    const[activeSize,setActiveSize] = useState("M")
    const location = useLocation()

    const setActiveSizeHandler = (e)=>{
        if(e.target.textContent ==="M"){
            setActiveSize("M")
            setBasePriceHandler(e.target.textContent)
        }else{
            setActiveSize("L")
            setBasePriceHandler(e.target.textContent)
        }
    }


    const itemDefaultState = {
        ...location.state,
        size:location.state.baseSize,
        cartItemDsc:location.state.baseSize,
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
                const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
                updatedItem.totalPrice = updatedTotalPrice
                updatedItem.baseSize = action.context
                updatedItem.cartItemDsc= cartItemDsc 
                return updatedItem
            }     
            if(action.context==='L')
            {
                const updatedItem ={...state,basePrice:state.listedPrice[1]}
                const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
                const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
                updatedItem.totalPrice = updatedTotalPrice
                updatedItem.baseSize = action.context
                updatedItem.cartItemDsc= cartItemDsc 
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
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
            updatedItem.totalPrice = updatedTotalPrice
            updatedItem.cartItemDsc= cartItemDsc 
            return updatedItem
        }else if(action.type==='removeTopping'){
            const updatedToppings =  state.toppings.filter(topping => topping !== action.topping);
            const updatedItem = {
                ...state,
                toppings:updatedToppings
            }
            const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize)
            updatedItem.totalPrice = updatedTotalPrice
            updatedItem.cartItemDsc= cartItemDsc 
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

    return (
        <div className="grid wide">
            <div className={classes[`item-info`]}>
                <div className=""><h1>{itemState.name}</h1></div>
                <div className={`${classes.content}`}>
                    <div className={`l-4 m-6 c-12 ${classes.img}`}>
                        <img src={itemState.imgUrl} alt="" />
                    </div>
                    <div className={`l-4  m-6 c-12 ${classes[`buy-section`]}`}>
                        <div className={classes.customize}>
                                <div className={`${classes.size} l-4 m-4 c-4`}>
                                    <span>size:</span>
                                    <ul>
                                        {itemState.listedPrice.length >= 1 && <li><button className={activeSize === "M"?`${classes.active}`:""} onClick={setActiveSizeHandler}>M</button></li>}
                                        {itemState.listedPrice.length === 2 && <li><button className={activeSize === "L"?`${classes.active}`:""}  onClick={setActiveSizeHandler}>L</button></li>}
                                    </ul>
                                </div>
                                
                                {/* <span className={classes.price}>{(itemState.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}<sup>đ</sup></span> */}
                            
                                <div className={`${classes.sweet} l-4 m-4 c-4`}>
                                    <span>Độ Ngọt ngào:</span>
                                    <ul>
                                        <li><button></button></li>
                                    </ul>
                                </div>
                                <div className={`${classes.ice} l-4 m-4 c-4`}>
                                    <span>Lượng Đá:</span>
                                    <ul>
                                        <li><button></button></li>
                                    </ul>
                                </div>
                           
                        </div>
                        <AvailableTopping availableToppings={itemDefaultState.availableToppings} onDispatchItemAction={dispatchItemAction}></AvailableTopping>
                        <button className='btn' onClick={addToCartHandler}>Thêm Vào GiỎ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;