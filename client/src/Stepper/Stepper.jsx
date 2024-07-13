import React, { useState } from 'react'
import './Stepper.css'

function Stepper({steps}) {
    // console.log()

    const[currentstep,setcurrentstep]=useState(1)
    const[iscomplete,setiscomplete]=useState(false)
   
    function handlenext(){
        setcurrentstep((prevstep)=>{
            if (prevstep === steps.length ) {
                setiscomplete(true)
                return prevstep   
            } else {
              return prevstep + 1
            }

        })
    }

    function handleprev(){
        setcurrentstep((prevstep)=>{
            if (prevstep === 1 ) { 
                return 1   
            } else {
              return prevstep - 1
            }

        })
    }


    function cal(){
        return(
            (currentstep - 1) / (steps.length - 1) * 100
        )
        
    }
    

  return (
    <div>
        <h1>Checkout</h1>

        <div className="steppermain ">
           {
            steps.map((step,index )=>{
                return(
                    <div className='stepperparent' key={index}>
                        <div className={`steppernum ?
                        ${currentstep > index +1 || iscomplete ? "complete" :"" }
                         ${currentstep === index +1 ? "active" : "" }`}>
                            {currentstep > index +1 || iscomplete ? <span><i class="fa-solid fa-check"></i></span>: index+1}
                        </div>
                        <div className="steppername">
                            {step.name}
                        </div>

                    </div>
                )
            })
           } 
        </div>

        <div className='progressbar'>
           <div className="progress" style={{width:`${cal()}%`}}></div>
        </div>


        {
            !iscomplete ?
           <div className='stepperbtn'>
             <button onClick={handleprev} disabled ={currentstep == 1}>Prev</button>
            <button onClick={handlenext}>{currentstep === steps.length  ? "Finish" :"Next"  }</button>
           </div>
           :
           <div></div>
        }
        
        { 
        steps[currentstep - 1].component()
        }
    </div>
  )
}

export default Stepper