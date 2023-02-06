import classes from './CartMenu.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartMenuItem from './CartMenuItem';
function CartMenu() {
    const cartCtx = useContext(CartContext)
    const cartMenuItemList=cartCtx.items.map((item)=>{
        return<CartMenuItem item={item} key={item.cartItemDsc}></CartMenuItem>
    })
    return ( 
        <div className={classes[`cart-menu`]}>
            <div className={`grid wide ${classes.container}`}>
                <div>
                    <div className={classes.check}>
                        <label>
                            <input type="checkbox"/>
                        </label>
                    </div>
                    <div className={classes.sp}>Sản Phẩm</div>
                    <div className={classes.dg}>Đơn Giá</div>
                    <div className={classes.sl}>Số Lượng</div>
                    <div className={classes.st}>Số Tiền</div>
                    <div className={classes.tt}>Thao Tác</div>
                </div>
                <div className="">
                    {cartMenuItemList}
                </div>
            </div>
                
            
        </div>
     );
}

export default CartMenu;