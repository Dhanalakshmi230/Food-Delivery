import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (_itemId) => {
        if (!cartItems[_itemId]) {
            setCartItems((prev) => ({ ...prev, [_itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [_itemId]: prev[_itemId] + 1 }));
        }
    };

    const removeFromCart = (_itemId) => {
        setCartItems((prev) => ({ ...prev, [_itemId]: prev[_itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
