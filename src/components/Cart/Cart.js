import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div style={{height: "100vh", position: "fixed", top: 0}}>
            <h2>Order Summary :</h2>
            <h5>Order Quantity: {cart.length}</h5>
        </div>
    );
};

export default Cart;