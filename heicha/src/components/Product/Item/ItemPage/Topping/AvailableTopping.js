import classes from './AvailableTopping.module.css'
import ToppingList from './ToppingList';





function AvailableTopping(props) {
    const availableToppings= props.availableToppings


    return ( 
        <div className={classes[`available-topping`]}>
            <button className={classes[`slide-down`]}>Topping <i className="fa-solid fa-caret-down"></i></button>
           <ToppingList onDispatchItemAction={props.onDispatchItemAction} availableToppings={availableToppings}></ToppingList>
        </div>
        
    );
}

export default AvailableTopping;