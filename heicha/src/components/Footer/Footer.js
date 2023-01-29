import classes from './Footer.module.css'
function Footer() {
    return ( 
        <div className={classes.footer}>
            <div className="grid wide">
                <div className={classes.content}>
                    <div className={classes.info}>
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100089093961056" ><i className="fa-brands fa-facebook"></i></a></li>                    
                        </ul>
                    </div>
                    <div className={classes.info}>
                        <p>© HeiCha Trà Tinh Tế. All rights reserved</p>
                    </div>
                    <div className={classes.info}>
                        <p>Heicha@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;