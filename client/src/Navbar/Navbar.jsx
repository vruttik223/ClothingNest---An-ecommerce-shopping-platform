import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../Redux/Actions';
function Navbar({search,setSearch}) {


    const [price ,setprice]=useState(0)
    const getdata = useSelector((state) => state.Reducers.cart)
    console.log(getdata)


    const [menu, setmenu] = useState(null);
    const open = Boolean(menu);
    const handleClick = (event) => {
        setmenu(event.currentTarget);
    };
    const handleClose = () => {
        setmenu(null);
    };
    const  dispatch = useDispatch()

    function del(id){
        dispatch(Remove(id))

    }

    // console.log(price)
    

    const [hum, sethum] = useState(false)
    const navigate = useNavigate()


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
        <div className='nav'>
            <div className="logo" onClick={() => { navigate("/") }}>
                <h1>ClothingNest</h1>
            </div>
            <div>
                <ul className={hum ? "menu menuopen" : "menu"} >
                    <li><Link to="/Mens">Mens</Link></li>
                    <li><Link to="/Womens">Womens</Link></li>
                    <li><Link to="/Kids">Kids</Link></li>
        <li><div className='searchparent'>
            <input className='searchinp' type="search" value={search} placeholder='Search Product...' onChange={(e) => { setSearch(e.target.value) }} />
            </div>
</li>
                </ul>
                
            </div>

           
            <div className="icons">

                <Badge className='abc' badgeContent={getdata.length} color="primary">
                    <i className="fa-solid fa-cart-shopping" id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}></i>

                </Badge>
                <Menu
                    id="basic-menu"
                    anchorEl={menu}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='menuitems1'>
                                <h3>Your cart </h3>

                                {
                                    getdata.map((val, i) => {
                                        console.log(getdata)
                                        return (
                                          
                                            <div className="cartitem" key={i}>
                                                <div className="cartimg">
                                                <Link onClick={handleClose} to={`/cartdetails/${val.id}`}>
                                                    <img src={val.imgurl} alt="" />
                                                </Link>
                                                </div>
                                                <div className='carttitle'>
                                                    <p> <span>Title: </span>{val.title}</p>
                                                    <p><span>Price :</span>  ₹<del>{val.oprice}</del> ₹{val.disprice} </p>
                                                    <p><span>Quantity: </span>{val.quantity}</p>
                                                    <p><span>Size : </span> M </p>

                                         <div className="remove">
                                         <button className='btn1' onClick={()=>del(val.id)}><span class="text">Remove</span><i className="fa-solid fa-trash"  ></i></button> 
                                    <Link to={`/cartdetails/${val.id}`}> <button className='btn2'><span class="text">See</span><i className="fa-solid fa-eye" ></i></button>  </Link>

                                                    </div>

                                                </div>

                                            </div>

                                        )

                                    })
                                }
                                <h2 className='total'>Total: - ₹{price}</h2>
                                <Link to="/checkout" onClick={handleClose} >Checkout</Link>
                            </div>
                            :
                            <div className='menuitems'>
                                <div className='cross'>

                                    <i className="fa-solid fa-xmark" onClick={handleClose}></i>
                                </div>

                                <h4>Your  Cart is empty</h4>
                                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
                                <div>
                                    <button className='shop-now-btn '>Shop now</button>
                                </div>
                            </div>
                    }





                </Menu>



            </div>
            <div className='ham' onClick={() => sethum(!hum)}>
                {
                    hum ?
                        <i className="fa-solid fa-xmark"></i>
                        :
                        <i className="fa-solid fa-bars"></i>
                }
            </div>
        </div>
    )
}

export default Navbar