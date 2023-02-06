import classes from './ModalSelect.module.css'
import ReactDOM from 'react-dom';
import { useState } from 'react';



function Modal(props) {
    const stopPropagationHandler = (e) => {
        e.stopPropagation()
    }


    const[checkedValue,setCheckedValue] = useState(props.value)

    const setCheckedValueHandler = (e)=>{
        setCheckedValue(e.target.value*1)
        if(props.actionType==="setSugar"){
            
            setSugarPercentHandler(e.target.value*1)

        }else{

            setIcePercentHandler(e.target.value*1)

        }


    }
    const setSugarPercentHandler= (value)=>{
        props.onDispatchItemAction({ type:'setSugarPercent',value:value})
    }

    const setIcePercentHandler= (value)=>{
        props.onDispatchItemAction({ type:'setIcePercent',value:value})
    }
    
    const formSubmmitHandler = (e)=>{
        e.preventDefault();

    }
    return (
        <div className={classes.overlay} onClick={props.onClick}>
            <div className={classes.select} onClick={stopPropagationHandler}>
                <h1>Chọn độ ngọt ngào</h1>
                <form className="row" onSubmit={formSubmmitHandler}>
                    <div className='l-6 m-6 c-12'>
                        <label htmlFor="">
                            <input type="radio" name="percentage" onChange={setCheckedValueHandler} value={0}  checked={checkedValue === 0}/>
                            0%
                        </label>

                    </div>

                    <div className='l-6 m-6 c-12'>
                        <label htmlFor="">
                            <input type="radio"  name="percentage" onChange={setCheckedValueHandler} value={30} checked={checkedValue=== 30} />
                            30%
                        </label>

                    </div  >

                    <div className='l-6 m-6 c-12'>
                        <label htmlFor="">
                            <input type="radio"  name="percentage" onChange={setCheckedValueHandler} value={50} checked={checkedValue=== 50} />
                            50%
                        </label>

                    </div>
                    <div className='l-6 m-6 c-12'>
                        <label htmlFor="">
                            <input type="radio" name="percentage" onChange={setCheckedValueHandler} value={70}  checked={checkedValue===70} />
                            70%
                        </label>

                    </div>
                    <div className='l-6 m-6 c-12'>
                        <label htmlFor="">
                            <input type="radio"  name="percentage" onChange={setCheckedValueHandler} value={100} checked={checkedValue=== 100}/>
                            100%
                        </label>

                    </div>
                </form>
            </div>
        </div>
    );
}
const portalElement = document.getElementById('overlays');





function ModalSelect(props) {
    return (
        <>
            {ReactDOM.createPortal(<Modal onDispatchItemAction={props.onDispatchItemAction} actionType={props.actionType} onClick={props.onClick} item={props.item} value={props.value} />, portalElement)}
        </>
    );
}





export default ModalSelect;