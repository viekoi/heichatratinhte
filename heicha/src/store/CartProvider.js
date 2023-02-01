import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    const existingCartItemIndexHandler = () => {
        let index = -1
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === action.item.id && state.items[i].toppings.length === action.item.toppings.length && state.items[i].baseSize === action.item.baseSize) {
                if (state.items[i].toppings.length === 0 && action.item.toppings.length === 0) {

                    return i
                } else {
                    for (let j = 0; j < state.items[i].toppings.length; j++) {

                        if (state.items[i].toppings[j].id !== action.item.toppings[j].id) {

                            break;
                        } else {

                            return index = i;

                        }
                    }
                }
            }
        }
        return index;
    }


    if (action.type === 'ADD') {

        const updatedTotalAmount =
            state.totalAmount + action.item.totalPrice * action.item.totalAmount;
        // const existingCartItemIndex = state.items.findIndex(
        //   (item) => item.id === action.item.id
        // );

        const existingCartItemIndex = existingCartItemIndexHandler();
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                totalAmount: existingCartItem.totalAmount + action.item.totalAmount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        // const existingCartItemIndex = state.items.findIndex(
        //     (item) => item.id === action.id
        // );
        const existingCartItemIndex = existingCartItemIndexHandler();
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.totalPrice;
        let updatedItems;
        if (existingItem.totalAmount === 1) {
            const removeItem = state.items[existingCartItemIndex]
            updatedItems = state.items.filter(item => item !== removeItem)
        } else {
            const updatedItem = { ...existingItem, totalAmount: existingItem.totalAmount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'UPDATE') {
        console.log(action.item)
        const existingCartItemIndex = existingCartItemIndexHandler();
        const existingItem = state.items[existingCartItemIndex];
        let updatedTotalAmount;


        let updatedItems;
        //action.item.totalAmount trả về chuỗi từ input  để khi nhập không bị lỗi
        if (action.item.totalAmount === "0") {
            updatedTotalAmount = state.totalAmount - (existingItem.totalAmount * action.item.totalPrice*1);
            const removeItem = state.items[existingCartItemIndex]
            updatedItems = state.items.filter(item => item !== removeItem)
        }
        // *1 để chuyển chuỗi thành số cho phép toán
        else if (action.item.totalAmount * 1 <= 0) {
           
            if (existingItem.totalAmount > 1) {
                console.log("aaa")
                updatedTotalAmount = state.totalAmount - (existingItem.totalAmount * action.item.totalPrice) + action.item.totalPrice;
            }else{
                updatedTotalAmount = state.totalAmount
            }
            const updatedItem = { ...existingItem, totalAmount: 1 /* *1 để chuyển từ chuỗi lại thành số để xử dụng */ };
            updatedItems = [...state.items];
            //update giá trường hợp <=0
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            if (existingItem.totalAmount < action.item.totalAmount*1) {
                updatedTotalAmount = state.totalAmount + ((action.item.totalAmount*1 - existingItem.totalAmount) * action.item.totalPrice);
            } else if (existingItem.totalAmount >= action.item.totalAmount) {
                updatedTotalAmount = state.totalAmount - ((existingItem.totalAmount - action.item.totalAmount*1) * action.item.totalPrice);
            }
            const updatedItem = { ...existingItem, totalAmount: action.item.totalAmount * 1 /* *1 để chuyển từ chuỗi lại thành số để xử dụng */ };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }



    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (item) => {
        dispatchCartAction({ type: 'REMOVE', item: item });
    };

    const updateItemFromCartHandler = (item) => {
        dispatchCartAction({ type: 'UPDATE', item: item });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateItem: updateItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;