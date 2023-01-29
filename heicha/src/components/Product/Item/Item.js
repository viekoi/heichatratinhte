import {useNavigate} from 'react-router-dom'

import classes from './Item.module.css'



function Item(props) {

    const navigate = useNavigate()
    const item = props.item
    const price = (item.listedPrice[0] * 1000).toLocaleString({style:"currency", currency:"VND"})

    return (

        <>
            <div className={`l-3 m-3 c-6`}>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <a onClick={()=>{navigate("/ItemPage",{state:item})}}>
                            <img src={item.imgUrl} alt="" />
                        </a>
                    </div>
                    <div className={classes.name}>
                        <a onClick={()=>{navigate("/ItemPage",{state:item})}}>
                            {item.name}
                        </a>
                    </div>
                    <div className={classes.price}>
                        <p>chỉ từ <span>{price}<sup>đ</sup></span></p>
                    </div>
                </div>
            </div>
          
        </>
    );
}

export default Item;