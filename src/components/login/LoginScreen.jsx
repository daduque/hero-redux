import React from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../auth/authContext'
// import { types } from '../../types/types'
import GoogleButton from 'react-google-button'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth'
import { useSelector } from 'react-redux'


const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: 'prueba@gmail.com',
        password: '123456',
    })

    const { email, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        // console.log(email, password);
        dispatch( startLoginWithEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        console.log('Google Login TODO');
        dispatch( startGoogleLogin() );
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <form onSubmit={ handleLogin }>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required 
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-outline-primary w-100"
                    disabled= { loading }
                >
                    Login with email and password
                </button>
            </form>
            <div className="mt-3">
                <p>or</p>
                
                <GoogleButton onClick={ handleGoogleLogin } />
                
                <hr />
                <Link to="/register"> Register new user </Link>
            </div>

            {/* <button 
                className="btn btn-primary"
                onClick={ handleLogin }    
            >
                Login
            </button> */}
        </div>
    )
}

export default LoginScreen
