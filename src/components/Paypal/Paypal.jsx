import React from "react";
import ReactDOM from "react-dom"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


export default function PaypalBtn({price}) {

    const onCreateOrder = (data,actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "34",
                    },
                },
            ],
        });
    }
    
    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }
    return ( 

        <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />

    );
}