import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate()

    const onchangeHandler = (e) => {
        setInputs((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmithandler = async (e) => {
        e.preventDefault()
        console.log(inputs)
        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/register', {
                name: inputs.name,
                email: inputs.email,
                phone: inputs.phone,
                password: inputs.password
            })

            console.log(response)


            if (response.data.success) {
                alert("User Registered Successfully")
                navigate("/login")
            }

        } catch (error) {

            console.log(error)

        }
        console.log(inputs)
    }

    return (
        <>
            <div className='main-page'>

                <form onSubmit={onSubmithandler}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label">
                            Your Name
                        </label>
                        <input
                            onChange={onchangeHandler}
                            value={inputs.name}
                            type="text"
                            name='name'
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label">
                            Email address
                        </label>
                        <input
                            onChange={onchangeHandler}
                            value={inputs.email}
                            type="email"
                            name='email'
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                        <div
                            id="emailHelp"
                            className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label">
                            Your Phone Number
                        </label>
                        <input
                            onChange={onchangeHandler}
                            value={inputs.phone}
                            type="text"
                            name='phone'
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label">
                            Password (add conferm password field)
                        </label>
                        <input
                            onChange={onchangeHandler}
                            value={inputs.password}
                            type="password"
                            name='password'
                            className="form-control"
                            id="exampleInputPassword1" />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary margin-to-centre">
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register
