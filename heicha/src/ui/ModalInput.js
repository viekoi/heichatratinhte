import classes from './ModalInput.module.css'
import ReactDOM from 'react-dom';



function Modal(props) {
    const stopPropagationHandler =(e)=>{
        e.stopPropagation()
    }


    
    return ( 
    <div className={classes.overlay} onClick={props.onClick}>
        <div className={classes.input} onClick={stopPropagationHandler}>
            <h1>Nhập số lượng</h1>
            <input type="number" min={0} max={20} defaultValue={props.value}  onChange={e=>{props.onCartItemUpdateHandler(props.item,e.target.value/* e.target.value trả về chuỗi*/)}}/>
        </div>
    </div>
     );
}
const portalElement = document.getElementById('overlays');





function ModalInput(props) {
    return (  
        <>
            {ReactDOM.createPortal(<Modal onClick={props.onClick} item={props.item} value={props.value} onCartItemUpdateHandler={props.onCartItemUpdateHandler}/>, portalElement)}
        </>
    );
}





export default ModalInput;