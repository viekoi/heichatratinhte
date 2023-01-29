import classes from './HeaderLoginForm.module.css'

function HeaderLoginForm() {
    return (  
        <div className={classes.login} id="header-login">
            <div className={classes.header}>
                <h2 className="">ĐĂNG NHẬP TÀI KHOẢN</h2>
                <p className="">Nhập email và mật khẩu của bạn:</p>
            </div>
            <form className={classes['login-form']} action="submit">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Mật Khẩu"/>
                <div className={classes.capcha}>
                    <p className="">This site is protected by reCAPTCHA and the Google <a className=""> Privacy policy</a> and <a className="">Terms Of Service</a> apply</p>
                </div>
                <button className={`btn ${classes.button}`} type="submit">Đăng Nhập</button>
            </form>
            <div className={classes.help}>
                <p className="">Khách hàng mới? <a className="">Tạo tài khoản</a></p>
                <p className="">Quên mật khẩu? <a className="">Khôi phục mật khẩu</a></p>
            </div>
        </div>
    );
}

export default HeaderLoginForm;