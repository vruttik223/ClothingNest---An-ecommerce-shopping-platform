import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Clearcart } from '../Redux/Actions';
import './stepperall.css';

const StepTwo = () => {
  const [orderid, setorderid] = useState(null);
  const [price, setprice] = useState(0);
  const getdata = useSelector((state) => state.Reducers.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function total() {
    let price = 0;
    getdata.forEach((val) => {
      price += val.disprice * val.quantity;
    });
    setprice(price);
  }

  useEffect(() => {
    total();
  }, [getdata]);

  function handlepay() {
    let data = {
      amount: Math.round(price * 100), // amount in paise for Razorpay
      currency: 'INR',
      receipt: 'qwsaq1',
    };

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setorderid(res.id);

        const options = {
          key: 'rzp_test_4mqQiy6HnVOPwh',
          amount: data.amount,
          currency: 'INR',
          name: 'Acme Corp',
          description: 'Test Transaction',
          image: 'https://example.com/your_logo',
          order_id: res.id,
          prefill: {
            name: 'Piyush Garg',
            email: 'youremail@example.com',
            contact: '9999999999',
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#3399cc',
          },
          handler: function (response) {
            fetch('http://localhost:5000/validate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(response),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.msg === 'success') {
                  dispatch(Clearcart());
                  navigate('/success');
                } else {
                  alert('Payment verification failed');
                }
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on('payment.failed', function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="container">
      <h2>Payment Details</h2>
      <div className="info-container">
        <p><strong>Order ID:</strong> {orderid}</p>
        <p><strong>Total Price:</strong> ₹{price}</p>
        <p><strong>Currency:</strong> INR</p>
      </div>
      <button className="pay-button" onClick={handlepay}>Pay</button>
    </div>
  );
};

export default StepTwo;
