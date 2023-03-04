import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [data, setData] = useState({})
    const [success, setSuccess] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handleNombre(e) {
        setNombre(e.target.value)
    }
    function handleContraseña(e) {
        setContraseña(e.target.value)
    }
    function handleConfirmar(e) {
        setConfirmar(e.target.value)
    }

    useEffect(() => {
        let data = {
            email: email,
            username: username,
            nombre: nombre,
            contraseña: contraseña,
            confirmar: confirmar
        }
        setData(data)
    }, [email, username, nombre, contraseña, confirmar])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/users/register', data)
            .then(response => setSuccess(response.data.message))
            .catch(error => {
                if (error.response.status === 400) {
                    setSuccess(error.response.data.message);
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-input">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmail} className="form-email" />
                </div>
                <div className="form-input">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsername} className="form-username" />
                </div>
                <div className="form-input">
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={handleNombre} className="form-nombre" />
                </div>
                <div className="form-input">
                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={handleContraseña} className="form-contraseña" />
                </div>
                <div className="form-input">
                    <label>Confirmar contraseña:</label>
                    <input type="password" value={confirmar} onChange={handleConfirmar} className="form-confirmar" />
                </div>
                <button type="submit" className="form-button">Register</button>
                <h3>{success}</h3>
            </form>
            <div className="form-link">
                <p>Already registered?</p>
                <Link to={'/signin'}>
                    <button className="form-signin-button">Sign In</button>
                </Link>
            </div>
        </>
    );
}

export default SignUp