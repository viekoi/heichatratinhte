import classes from './HeaderCart.module.css'
function HeaderCart() {
    return (
        <div className={classes[`header-cart`]}>

                <div className={classes.header}>
                    <p className="">GIỎ HÀNG</p>
                </div>
                <div className={classes.content}>
                    <div className={classes['in-cart']}>
                        <div className="empty">
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                            <p>Hiện chưa có sản phẩm</p>
                        </div>
                    </div>
                    <div className={classes[`total-price`]}>
                        <div className={classes[`price-section`]}>
                            <span className="left">TỔNG TIỀN:</span>
                            <span className="right">0đ</span>
                        </div>
                        <button className="btn">
                            <a >XEM GIỎ HÀNG</a>
                        </button>
                    </div>

                </div>

        </div>
    );
}

export default HeaderCart;