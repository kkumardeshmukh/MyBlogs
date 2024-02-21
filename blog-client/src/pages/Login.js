import React, { useState } from 'react'

const Login = () => {

    // const [inputs, setInputs] = useState('')

    // onchangeHandler = () => { }

    // onSubmithandler = () => { }




    return (
        <>
            <div className='main-page'>

                <form>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            name='name'
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
                            htmlFor="exampleInputPassword1"
                            className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1" />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary margin-to-centre">
                        Login
                    </button>
                </form>
            </div>
        </>


    )
}

export default Login
