import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SignIn.css'

function SignIn() {

    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [data, setData] = useState({})
    const [res, setRes] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleContraseña(e) {
        setContraseña(e.target.value)
    }

    useEffect(() => {
        let data = {
            email: email,
            contraseña: contraseña,
        }
        setData(data)
    }, [email, contraseña])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/users/', data)
            .then(response => setRes(response.data.message))
            .catch(error => {
                if (error.response.status === 400) {
                    setRes(error.response.data.error);
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-input">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmail} className="form-control" />
                </div>
                <div className="form-input">
                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={handleContraseña} className="form-control" />
                </div>
                {!res && <button type="submit" className="form-button">Iniciar sesión</button>}
                <h1 className="form-message">{res}</h1>
            </form>
        </>
    )
}

export default SignIn