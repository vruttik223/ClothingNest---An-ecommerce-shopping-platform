import React, { useEffect, useState } from 'react'
import './Customer.css'
import { useDispatch, useSelector } from 'react-redux'

function Customer() {
    const [price ,setprice]=useState(0)
    const getdata = useSelector((state) => state.Reducers.cart)
    console.log(getdata)



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
    return (
        <div className='customermain'>
            <>
                {/* Hello world */}
                <header>
                    <h3>Checkout</h3>
                </header>
                <main>
                    <section className="checkout-form">
                        <form action="#!" method="get">
                            <h6>Contact information</h6>
                            <div className="form-control">
                                <label htmlFor="checkout-email">E-mail</label>
                                <div>
                                    <span className="fa fa-envelope" />
                                    <input
                                        type="email"
                                        id="checkout-email"
                                        name="checkout-email"
                                        placeholder="Enter your email..."
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label htmlFor="checkout-phone">Phone</label>
                                <div>
                                    <span className="fa fa-phone" />
                                    <input
                                        type="tel"
                                        name="checkout-phone"
                                        id="checkout-phone"
                                        placeholder="Enter you phone..."
                                    />
                                </div>
                            </div>
                            <br />
                            <h6>Shipping address</h6>
                            <div className="form-control">
                                <label htmlFor="checkout-name">Full name</label>
                                <div>
                                    <span className="fa fa-user-circle" />
                                    <input
                                        type="text"
                                        id="checkout-name"
                                        name="checkout-name"
                                        placeholder="Enter you name..."
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label htmlFor="checkout-address">Address</label>
                                <div>
                                    <span className="fa fa-home" />
                                    <input
                                        type="text"
                                        name="checkout-address"
                                        id="checkout-address"
                                        placeholder="Your address..."
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label htmlFor="checkout-city">City</label>
                                <div>
                                    <span className="fa fa-building" />
                                    <input
                                        type="text"
                                        name="checkout-city"
                                        id="checkout-city"
                                        placeholder="Your city..."
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="checkout-country">Country</label>
                                    <div>
                                        <span className="fa fa-globe" />
                                        <input
                                            type="text"
                                            name="checkout-country"
                                            id="checkout-country"
                                            placeholder="Your country..."
                                            list="country-list"
                                        />
                                        <datalist id="country-list">
                                            <option value="India" />
                                            <option value="USA" />
                                            <option value="Russia" />
                                            <option value="Japan" />
                                            <option value="Egypt" />
                                        </datalist>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="checkout-postal">Postal code</label>
                                    <div>
                                        <span className="fa fa-archive" />
                                        <input
                                            type="numeric"
                                            name="checkout-postal"
                                            id="checkout-postal"
                                            placeholder="Your postal code..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control checkbox-control">
                                <input
                                    type="checkbox"
                                    name="checkout-checkbox"
                                    id="checkout-checkbox"
                                />
                                <label htmlFor="checkout-checkbox">
                                    Save this information for next time
                                </label>
                            </div>
                            <div className="form-control-btn">
                                <button>Continue</button>
                            </div>
                        </form>
                    </section>
                    <section className="checkout-details">
                        <div className="checkout-details-inner">
                            <div className="checkout-lists">
                                {
                                    getdata.map((val) => {
                                        return (
                                            <>

                                                <div className="card">


                                                    <div className="card-image">
                                                        <img
                                                            src={val.imgurl}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="card-details">
                                                        <div className="card-name">{val.title}</div>
                                                        <div className="card-price">
                                                        ₹{val.disprice} <span>₹{val.oprice}</span>
                                                        </div>
                                                        <div className="card-wheel">
                                                            <button>-</button>
                                                            <span>{val.quantity}</span>
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )

                                    })
                                }


                            </div>
                            <div className="checkout-shipping">
                                <h6>Shipping</h6>
                                <p>$19</p>
                            </div>
                            <div className="checkout-total">
                                <h6>Total</h6>
                                <p>₹{price}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </>

        </div>
    )
}

export default Customer