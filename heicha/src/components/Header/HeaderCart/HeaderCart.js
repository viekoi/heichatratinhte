import classes from './HeaderCart.module.css'
import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import HeaderCartItem from './HeaderCartItem';





function HeaderCart() {
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
    return (
        <div className={classes[`header-cart`]}>
            <div className={classes.content}>
                <div className={classes['in-cart']}>
                    <div>

                        {cartCtx.items.length === 0 && <div className="empty">
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                            <p>Hiện chưa có sản phẩm</p>
                        </div>}
                        {cartCtx.items.length !== 0 && <div className="notempty">
                            <ul>
                                {cartCtx.items.map((item) => {
                                    return <HeaderCartItem onCartItemUpdateHandler={cartItemUpdateHandler} onCartItemAddHandler={cartItemAddHandler.bind(null,item)} onCartItemRemoveHandler={cartItemRemoveHandler.bind(null,item)}  item={item} key={item.dsc}></HeaderCartItem>
                                })}
                            </ul>
                        </div>}
                    </div>


                </div>
                <div className={classes[`total-price`]}>
                    <div className={classes[`price-section`]}>
                        <span className="left">TỔNG TIỀN:</span>
                        <span className="right">{(cartCtx.totalAmount * 1000).toLocaleString({ style: "currency", currency: "VND" })}đ</span>
                    </div>
                    <button className="btn">
                        XEM GIỎ HÀNG
                    </button>
                </div>

            </div>

        </div>
    );
}

export default HeaderCart;