import classes from './ItemInfo.module.css'
import { useLocation } from 'react-router-dom';
import React, {useReducer,useContext,useState} from 'react';
import AvailableTopping from './Topping/AvailableTopping';
import CartContext from '../../../../store/cart-context';
import ModalSelect from '../../../../ui/ModalSelect';

function ItemInfo() {


    const[activeSize,setActiveSize] = useState("M")
    const[showSugarPercentSelect,setshowSugarPercentSelect] = useState(false)
    const[showIcePercentSelect,setshowIcePercentSelect] = useState(false)



    const setshowSugarPercentSelectHandler =()=>{
        setshowSugarPercentSelect(!showSugarPercentSelect)
    }
    const setshowIcePercentSelectHandler =()=>{
        setshowIcePercentSelect(!showIcePercentSelect)
    }


    const setActiveSizeHandler = (e)=>{
        if(e.target.textContent ==="M"){
            setActiveSize("M")
            setBasePriceHandler(e.target.textContent)
        }else{
            setActiveSize("L")
            setBasePriceHandler(e.target.textContent)
        }
    }
    
    const location = useLocation()
    
    const itemDefaultState = {
        ...location.state,
        toppings:[],
        size:location.state.baseSize,
        selectedSugarPercent:location.state.availableSugarPercent[2],
        selectedIcePercent:location.state.availableIcePercent[2],
        cartItemDsc:location.state.baseSize + " / " +location.state.availableSugarPercent[2] +" / " + location.state.availableIcePercent[2],
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
                const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
                updatedItem.totalPrice = updatedTotalPrice
                updatedItem.baseSize = action.context
                updatedItem.cartItemDsc= cartItemDsc 
                return updatedItem
            }     
            if(action.context==='L')
            {
                const updatedItem ={...state,basePrice:state.listedPrice[1]}
                const updatedTotalPrice = updatedItem.basePrice + updatedItem.toppings.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
                const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
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
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
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
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
            updatedItem.totalPrice = updatedTotalPrice
            updatedItem.cartItemDsc= cartItemDsc 
            return updatedItem
        }else if(action.type==='setSugarPercent'){
            const updatedItem ={...state,selectedSugarPercent:action.value}
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
            updatedItem.cartItemDsc= cartItemDsc 
            return updatedItem
        }else if(action.type==='setIcePercent'){
            const updatedItem ={...state,selectedIcePercent:action.value}
            const cartItemDsc =  updatedItem.toppings.reduce((accumulator,currentValue)=>accumulator +" / "+ currentValue.name,updatedItem.baseSize +" / " + updatedItem.selectedSugarPercent  +" / " +updatedItem.selectedIcePercent)
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
                <div className=""><h1>{itemDefaultState.name}</h1></div>
                <p>{itemDefaultState.dsc}</p>
                <div className={`${classes.content}`}>
                    <div className={`l-4 m-6 c-12 ${classes.img}`}>
                        <img src={itemDefaultState.imgUrl} alt="" />
                    </div>
                    <div className={`l-4  m-6 c-12 ${classes[`buy-section`]}`}>
                        
                        
                        <div className={classes.customize}>
                                <div className={classes.size} >
                                    <span>size:</span>
                                    <ul>
                                        {itemDefaultState.listedPrice.length >= 1 && <li><button className={activeSize === "M"?`${classes.active}`:""} onClick={setActiveSizeHandler}>M</button></li>}
                                        {itemDefaultState.listedPrice.length === 2 && <li><button className={activeSize === "L"?`${classes.active}`:""}  onClick={setActiveSizeHandler}>L</button></li>}
                                    </ul>
                                </div>
                                
                                
                                <div className={classes.sugar}>
                                    <span>????? Ng???t Ng??o:</span>
                                    <ul>
                                        <li>
                                            <button onClick={setshowSugarPercentSelectHandler}>{itemState.selectedSugarPercent}%</button>
                                            {showSugarPercentSelect && <ModalSelect onClick={setshowSugarPercentSelectHandler} onDispatchItemAction={dispatchItemAction}  value={itemState.selectedSugarPercent} actionType={"setSugar"}></ModalSelect>}
                                        </li>
                                    </ul>
                                </div>
                                <div className={classes.ice}>
                                    <span>L?????ng ????:</span>
                                    <ul>
                                        <li>
                                        <button onClick={setshowIcePercentSelectHandler}>{itemState.selectedIcePercent}%</button>
                                            {showIcePercentSelect && <ModalSelect onClick={setshowIcePercentSelectHandler} onDispatchItemAction={dispatchItemAction}  value={itemState.selectedIcePercent} actionType={"setIce"}></ModalSelect>}
                                        </li>
                                    </ul>
                                </div>
                           
                        </div>
                        <AvailableTopping availableToppings={itemDefaultState.availableToppings} onDispatchItemAction={dispatchItemAction}></AvailableTopping>
                        <div className={classes[`price-section`]}>
                            <span>Th??nh ti???n:</span>
                            <span className={classes.price}>{(itemState.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}<sup>??</sup></span>
                        </div>
                        <button className='btn' onClick={addToCartHandler}>Th??m V??o Gi???</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;