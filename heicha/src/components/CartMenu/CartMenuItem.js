import classes from './CartMenuItem.module.css'
import ModalInput from '../../ui/ModalInput'
import { useState } from 'react'

function CartMenuItem(props) {


  const[modal,setModal] = useState(false)
  const setModalHandler = ()=>{
      setModal(!modal)
  }
 

  return (
    <div className={classes[`cart-menu-item`]}>
      <div className={classes.check}>
        <label >
          <input type="checkbox" />
        </label>
      </div>
      <div className={classes.sp}>
        <a>
            <div className="">
             <img src={props.item.imgUrl} alt="" />
            </div>
            <div className="">
                <span>{props.item.name}</span>
            </div>
        </a>
      </div>
      <div className={classes.dsc}>{props.item.cartItemDsc}</div>
      <div className={classes.dg}>{(props.item.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}</div>
      <div className={classes.sl}><span><button onClick={props.onCartItemRemoveHandler}>-</button><input onClick={setModalHandler} type="button" value={props.item.totalAmount} /><button onClick={props.onCartItemAddHandler}>+</button> </span></div>
      <div className={classes.st}>{(props.item.totalPrice *1000 * props.item.totalAmount ).toLocaleString({ style: "currency", currency: "VND" })}</div>
      <div className={classes.tt}><button onClick={()=>{props.onCartItemUpdateHandler(props.item,"0" /* chuoi do thuat toan ben provder */)}}><i class="fa-solid fa-x"></i></button></div>
      {modal && <ModalInput value={props.item.totalAmount} item={props.item} onCartItemUpdateHandler={props.onCartItemUpdateHandler} onClick={setModalHandler}></ModalInput>}
    </div>
  )
}

export default CartMenuItem
