import React, { useState } from 'react'
import { LoginComponent } from '../components/LoginComponent'
import { ResetPassword } from '../components/ResetPassword';

export const LoginPage = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [formLoad,setFormLoad]=useState("login")

    const handleOnchange= (e) => {
        const {name,value}=e.target
        switch(name){
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default: break
        }
    }

    const handleOnSubmit= (e) =>{
        e.preventDefault()
        if(!email || !password){
            alert("Fill up all the form!!")
        }
        console.log(email,password)
    }

    const handleOnResetSubmit= (e) =>{
        e.preventDefault()
        if(!email){
            alert("Enter the email!!")
        }
        console.log(email)
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }
    return (
        <div className='bg-slate-950 h-screen w-screen flex-col'>
            {formLoad === 'login' && (
                <LoginComponent 
                handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                password={password}/>)
            }
            {formLoad === 'reset' && (
                <ResetPassword 
                handleOnchange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}/>)
            }
        </div>
  )
}
