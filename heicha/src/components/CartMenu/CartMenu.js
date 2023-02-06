import classes from './CartMenu.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartMenuItem from './CartMenuItem';
function CartMenu() {
    const cartCtx = useContext(CartContext)

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem(item);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, totalAmount: 1 });
      };

      const cartItemUpdateHandler = (item,totalAmount) => {
        cartCtx.updateItem({ ...item, totalAmount:totalAmount });
      };


    const cartMenuItemList=cartCtx.items.map((item)=>{
        return<CartMenuItem onCartItemUpdateHandler={cartItemUpdateHandler} item={item} key={item.cartItemDsc+item.id} onCartItemAddHandler={cartItemAddHandler.bind(null,item)} onCartItemRemoveHandler={cartItemRemoveHandler.bind(null,item)}></CartMenuItem>
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
                <div className={classes.list}>
                    {cartMenuItemList}
                </div>
                <div className={classes.del}>
                    <button className="btn">Xóa Lựa Chọn</button>
                </div>
            </div>
                
            
        </div>
     );
}

export default CartMenu;