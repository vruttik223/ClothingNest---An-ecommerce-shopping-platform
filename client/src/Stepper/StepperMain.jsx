import React, { useEffect, useState } from 'react'
import Stepper from './Stepper'
import Customer from './Customer'
import { useDispatch, useSelector } from 'react-redux'
import { Clearcart } from '../Redux/Actions'
function StepperMain() {

    const[orderid,setorderid] =useState(null)
    const [price ,setprice]=useState(0)
    const getdata = useSelector((state) => state.Reducers.cart)

    const dispatch = useDispatch()

    
    function total(){
        let price = 0 
        getdata.map((val)=>{
            return  price = val.disprice * val.quantity + price
        })
        setprice(price)

    }
    useEffect(()=>{
        total()
    },[total])


    function handlepay(){
        let data ={
            "amount": price,
            "currency": "INR",
            "receipt": "qwsaq1"
            
        }

        fetch("http://localhost:5000/order" ,{
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify(data)
    
        }).then((result)=>{
            result.json().then((res)=>{
    
    
                setorderid(res.id)
    
            })
    
        })



        const options = {
            key: "rzp_test_4mqQiy6HnVOPwh", // Enter the Key ID generated from the Dashboard
            amount: data.amount * 100,   // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: orderid, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
             "callback_url": "/success",
            
            prefill: {
              name: "Piyush Garg",
              email: "youremail@example.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
        
          const rzp1 = new Razorpay(options);

          rzp1.on("payment.success", function (response) {

            dispatch(Clearcart());
            alert("Order placed successfully! Order ID: " + res.id);
            // Dispatch an action to clear the cart upon successful payment
          });
        
          rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
        
          rzp1.open();
        };


    

    

    

    
    const checkoutsteps = [
        {
            name:"Customer Info",
            component:()=> <div> <Customer /> </div>
        },
        {
            name:"Shipping Info",
            component:()=> <div> Enter Shipping Info  </div>
        },
        {
            name:"payment Info",
            component:()=> <div> Enter payment Info  
                 <br />
                 
                 <button onClick={handlepay}>Pay</button>  </div>

        },
        {
            name:"Order Info",
            component:()=> <div> order status  </div>
        }

    ]

  return (
    <div>
        <Stepper steps ={checkoutsteps}/>
    </div>
  )
}

export default StepperMain