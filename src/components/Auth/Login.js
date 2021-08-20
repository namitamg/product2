import React ,{ useState } from 'react'
import {BUTTON ,Input , Checkbox} from '../Common'


export default function Login(props) {
    const [formData , setFormData ] = useState({
        email : 'afzal@g.com',
        password : 'abc123'
    })
    const [errors ,setError] = useState({
        email : '' ,
        password : ''
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData , 
            [e.target.name]  : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();  
        if(formData.email == "afzal@g.com" && formData.password == "abc123"){
            props.loginHandler()
            props.history.push('/dashboard')
        }else{
            setError({
                email : 'You have entered a wrong Email' ,
                password : 'Either email or password is wrong'
            })
        }

    }


    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
            <Input 
             name = 'email' 
             placeholder = "Enter Email"
             value={formData.email}                
             label = "Email"
             type = "email"
             onChange = {(e) => handleChange(e)}
             error={errors.email}
            />
            <Input 
             name = 'password' 
             placeholder = "Enter password"
             value={formData.password}                
             label = "Password"
             type = "password"
             onChange = {(e) => handleChange(e)}
             error={errors.password}
            />
            <Checkbox 
                label="Remember the sign details."
                onChange={(e) => handleChange(e)}
            />
            <BUTTON type="submit" text="Login"  color="primary" />
            </form>           

        </div>
    )
}