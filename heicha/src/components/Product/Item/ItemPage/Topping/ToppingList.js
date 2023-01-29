
import ToppingItem from './ToppingItem';



function ToppingList(props) {




    const toppingList = props.topping.map((item) => {
        return (
           <ToppingItem key ={item.id} item={item} onDispatchItemAction={props.onDispatchItemAction} ></ToppingItem>
        )
    })
    return (
        <ul >
            {toppingList}
        </ul>
    );
}

export default ToppingList;