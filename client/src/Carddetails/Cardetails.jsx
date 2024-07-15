import React, { useEffect, useState } from 'react'
import './Cardetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Add, Desc, Remove } from '../Redux/Actions'
// import mens from '../Mens/MensData';
// import womens from '../Womens/Womensdata';
// import kids from '../Kids/Kidsdata'



function Cardetails() {

    const [data, setdata] = useState([])
    const id = useParams().id
    console.log(id)

    const getdata = useSelector((state) => state.Reducers.cart)
    //   console.log(getdata)


    
    function datawrap() {
        let filtereddata = getdata.filter((val) => {
            return val.id == id
        })
        setdata(filtereddata)
    }

    // function datawrap() {
    //     let filtereddata = getdata.filter((val) =>{

    //     return val.id === id});
    //     if (filtereddata.length === 0) {
    //         // If no data found, you might want to look into mens, womens, or kids data as a fallback
    //         filtereddata = [...mens, ...womens, ...kids].filter((val) => val.id === id);
    //     }
    //     setdata(filtereddata);
    // }
    
    useEffect(() => {
        datawrap()
    }, [id])

    const dispatch = useDispatch()


    function send(e) {
        dispatch(Add(e))
    }

    function decrement(items){
        dispatch(Desc(items))
    }
    const navigate = useNavigate()

    function del(id){
        dispatch(Remove(id))
        navigate("/mens")
    }

    const [selectedcolor,setselectedcolor]=useState('');
    console.log(selectedcolor)
   function changecolor(color){
    setselectedcolor(color)

   }

    return (

        <div className="container">
            <div className="heading-section">
                <h2>Product Details</h2>
            </div>
            {
                data.map((val,i) => {
                    // console.log()
                   
                    return (
                        <>
                            <div className="row" key={i}>
                                <div className="content">
                                    {
                                        selectedcolor && 
                                        val.color.find((color)=> color.colorid === selectedcolor )
                                        ?
                                        <img src={val.color.find((color)=> color.colorid === selectedcolor).clrimg} alt="" />
                                        :
                                        <img src={val.imgurl} alt="" />
                                        
                                    }
                                </div>
                                

                                <div className="col-md-6 right">
                                    <div className="product-dtl">
                                        <div className="product-info">
                                            <div className="product-name">{val.title}</div>
                                          
                                            <div className="product-price-discount"><span>₹{val.disprice}</span><span className="line-through">₹{val.oprice}</span></div>
                                        </div>
                                        <p className='space'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="size">Size</label>
                                                <select id="size" name="size" className="form-control">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="color">Color</label>
                                                <select id="color" name="color" value={selectedcolor} defaultValue="defaultcolor" onChange={(e)=>{changecolor(e.target.value)}}  className="form-control">
                                                <option value="defaultcolor">Select Color</option>
                                                    {/* to select the default option */}
                                                    {
                                                        val.color.map((color)=>{
                                                            return(
                                                                <>
                                                                {
                                                                    <option value={color.colorid}>{color.colorid}</option>
                                                                     
                                                                }
                                                                </>
                                                                
                                                            )
                                                        })
                                                    }
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div className='signletotal'>
                                            <h3>Total :- ₹{val.disprice * val.quantity}</h3>
                                        </div>
                                        <div className="product-count">
                                            <label htmlFor="size">Quantity</label>
                                            <form action="#" className="display-flex">
                                                <div className="qtyminus" onClick={val.quantity <= 1 ? ()=>del(val.id) :  ()=>decrement(val)} >-</div>
                                                <span className="qty">{val.quantity} </span>
                                                <div className="qtyplus" onClick={()=>send(val)}>+</div>
                                            </form>
                                            <a href="#" className="round-black-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>









        // <div>
        //     <h1>Product details Page</h1>
        //     <div classNameName='carddetailsmain'>
        //         {
        //             data.map((val) => {
        //                 return (
        //                     <div className="carddetails">
        //                         <div className="img">
        //                             <img src={val.imgurl} alt="" />

        //                         </div>
        //                         <div className="cardcontent">
        //                             <h4>Title : - {val.title}</h4>
        //                             <h3> Ratings:-{val.rating}</h3>
        //                             <h3>Mrp : - {val.disprice}</h3>
        //                             <h4>Quantity :- {val.quantity}</h4>

        //                         </div>
        //                     </div>

        //                 )

        //             })
        //         }


        //     </div>
        // </div>
    )
}

export default Cardetails