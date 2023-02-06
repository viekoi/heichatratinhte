import classes from './ModalSelect.module.css'
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';



function Modal(props) {
    const checkedData = [{value:0},{value:30},{value:50},{value:70},{value:100}]


    const stopPropagationHandler = (e) => {
        e.stopPropagation()
    }


    const[checkedValues,setCheckedValues] = useState([])

    useEffect(()=>{
        setCheckedValues(checkedData)
    },[])

    const channgeHandler=(e)=>{
        const {value,checked} = e.target    
        let tempCheckValues = checkedValues.map((checkValue)=>  {
             return (checkValue.value === value*1 ? {...checkValue,isChecked:checked,}:{...checkValue,isChecked:!checked,}) })
        setCheckedValues(tempCheckValues)
        if(props.actionType==="setSugar"){
            
            setSugarPercentHandler(value*1)

        }else{

            setIcePercentHandler(value*1)

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
                    {checkedValues.map((value,index)=>{
                        return(
                        <div key={index} className='l-6 m-6 c-12'>
                            <label htmlFor="">
                                <input type="radio" name="percentage" onChange={channgeHandler} value={value.value}  checked={(value?.isChecked || false)||value.value===props.value}/>
                                {value.value}%
                            </label>
    
                        </div>
                        )
                    })}
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