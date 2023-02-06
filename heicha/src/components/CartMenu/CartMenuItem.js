import classes from './CartMenuItem.module.css'
function CartMenuItem(props) {
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
      <div className={classes.sl}>{props.item.totalAmount}</div>
      <div className={classes.st}>{(props.item.totalPrice * 1000).toLocaleString({ style: "currency", currency: "VND" })}</div>
      <div className={classes.tt}>Thao Tác</div>
    </div>
  )
}

export default CartMenuItem
