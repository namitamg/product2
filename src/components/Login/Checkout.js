import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function Checkout() {
    const [form,setForm]=useState({
        firstname:'',
        lastname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
        nameoncard:'',
        cardnumber:'',
        expirydate:'',
        cvv:''
    })
    const [count,setCount]=useState(1) 
    const updateForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <form>
                            <h2 className="text-center">Checkout</h2>
                            <div className="d-flex justify-content-between">
                                <span>Booking address</span>
                                <span>Payment details</span>
                                <span>Booking done</span>
                            </div>
                            {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Booking address</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.city} name="city" className="form-control" placeholder="City *" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.state} name="state" className="form-control" placeholder="State/Province*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.country} name="country" className="form-control" placeholder="Country*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> ) : null}
                            {count === 2 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    <h4>Booking Summary</h4>
                                    <div className="col">
                                        <div className="col-9 m-auto">
                                            <div className="d-flex justify-content-between ">
                                                <p>Booking done -Eco hub Hotels, Goa, 3 days 2 nights stay <br/> Checkin-24th Aug 2021 <br/>Checkout- 27th Aug 2021</p><hr/>
                                                {/* <p>Eco hub Hotels  </p><hr/>
                                                <p>3 days 2 nights stay </p><hr/>
                                                <p> Checkin-24th Aug 2021</p><hr/>
                                                <p>Checkout- 27th Aug 2021</p><hr/> */}
                                                    
                                                {/* <p>Enjoy the stay, Thankyou</p> */}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div>
                                <Link to="/"><button className="btn btn-sm btn-outline-primary" type="submit" onClick={()=>alert("Thankyou, Enjoy the Stay")}>Place Order</button> </Link>
                            </div>
                            ) : null}
                        </form>
                        <div>
                            {count === 1 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count-1)}>Back</button>)}
                            {count === 3 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count+1)} >Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
    )
}
