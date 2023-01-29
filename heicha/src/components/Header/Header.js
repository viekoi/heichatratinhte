import classes from './Header.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import HeaderLoginForm from './HeaderLoginForm/HeaderLoginForm';
import HeaderCart from './HeaderCart/HeaderCart';
function Header() {
    // const [showLogin, setShowLogin] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const navigate = useNavigate()

    // const setShowLoginHandler = () => {
    //     setShowLogin(!showLogin)
    //     setShowCart(false)
    // }

    const setShowCartHandler = () => {
        setShowCart(!showCart)
        // setShowLogin(false)

    }

    return (
        <div className={classes.header}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4">
                        <div onClick={()=>{navigate("/")}} className={classes.logo}>
                            <img src="./assets/img/logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col l-8">
                        <div className={classes.tool}>
                            {/* <div className={classes['search-bar']}>
                                <form action="submit" className={classes.form}>
                                    <input type="text" placeholder="Từ Khóa" />
                                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div> */}
                            <div className={classes.nav}>
                                <div className={classes["lv-0"]}>
                                    <ul>
                                        <li >
                                            <a href="#PDS">THỰC ĐƠN</a>
                                            <div className={classes['lv-1']}>
                                                <div className="grid wide">
                                                    <ul className={classes[`header-nav`]}>
                                                        <li>
                                                            <ul className={classes[`lv-1-content`]}>
                                                                <li><a  className={classes['main-title']}>CÀ PHÊ BỌT</a></li>
                                                                <li><a >Cà Phê Đen</a></li>
                                                                <li><a >Bạc Xỉu</a></li>
                                                                <li><a >Cà Phê Sữa</a></li>
                                                                <li><a >Cà Phê Sữa Tươi</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>

                                                            <ul className={classes[`lv-1-content`]}>
                                                                <li><a  className={classes['main-title']}>TRÀ SỮA</a></li>
                                                                <li><a >Trà Sữa Đài Loan</a></li>
                                                                <li><a >Trà Sữa Ôlong Lài</a></li>
                                                                <li><a >Trà Sữa Gạo Rang</a></li>
                                                                <li><a >Trà Sữa Thảo Mộc</a></li>


                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul className={classes[`lv-1-content`]}>
                                                                <li>
                                                                    <a  className={classes['main-title']}>TRÀ</a>
                                                                </li>
                                                                <li className={classes.double}>
                                                                    <ul>
                                                                        <li><a >Trà Đen Macchiato</a></li>
                                                                        <li><a >Trà Ôlong Macchiato</a></li>
                                                                        <li><a >Trà Hạt Sen Macchiato</a></li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li><a >Trà Trái Cây</a></li>
                                                                        <li><a >Trà Ổi Hồng</a></li>
                                                                        <li><a >Trà Đen Vải Thiều</a></li>
                                                                    </ul>
                                                                </li>
                                                                
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul className={classes[`lv-1-content`]}>
                                                                <li><a  className={classes['main-title']}>MÓN ĂN NHẸ</a></li>
                                                                <li><a >Chè Thảo Mộc</a></li>
                                                                <li><a >Trứng Nấu Trà Đen</a></li>
                                                                <li><a >Tàu Hủ Singapore</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </li>
                                        <li ><a >QUÁN TRÀ</a></li>
                                        <li ><a >VỀ CHÚNG TÔI</a></li>
                                        {/* <li className={classes.user} >
                                            <button className={classes['header-nav-btn']} onClick={setShowLoginHandler}>
                                                <span><i className="fa-solid fa-user"></i></span>
                                            </button>
                                            {showLogin && <HeaderLoginForm></HeaderLoginForm>}
                                        </li> */}
                                        <li className={classes.cart} >
                                            <button className={classes['header-nav-btn']} onClick={setShowCartHandler}>
                                                <span><i className="fa-solid fa-cart-shopping"></i></span>
                                            </button>
                                            {showCart && <HeaderCart></HeaderCart>}

                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Header;
