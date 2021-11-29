import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';


const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'Andrés',
        email: 'prueba@gmail.com',
        password: '123456',
        password2: '123456',
        terms: true,
    })

    const { name, email, password, password2, terms } = formValues;

    const isFormValid = () => {

        if(name.trim().length < 2){
            // console.log('El nombre debe tener más de 2 caracteres');
            dispatch( setError('El nombre debe tener más de 2 caracteres') )
            return
        }
        if( password.length < 6 || password !== password2){
            // console.log('Las contraseñas deben coincidir y tener al menos 6 caracteres')
            dispatch( setError('Las contraseñas deben coincidir y tener al menos 6 caracteres') )
            return
        }
        if(!terms){
            // console.log('Debe aceptar los términos para continuar')
            dispatch( setError('Debe aceptar los términos para continuar') )
            
            return
        }
        if( !validator.isEmail(email) ){
            // console.log('El email no es válido')
            dispatch( setError('El email no es válido') )

            return
        }

        dispatch( removeError() )
        return true;
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ){

            console.log(name, email, password, password2, terms);
            dispatch( startRegisterWithEmailPassword(email, password, name) );
        }
    }

    return (
        <div className="container mt-5">
            <h1>Register Screen</h1>
            <hr />

            <form onSubmit={ handleRegister }>
                {
                    msgError && (
                        <div className="alert alert-danger" role="alert">
                            { msgError }
                        </div>
                        )
                }
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName" 
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required 
                    />
                </div>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword2" 
                        name="password2"
                        value={ password2 }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required 
                    />
                </div>
                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="invalidCheck2"
                        name="terms"
                        checked={ terms }
                        // value=""
                        onChange={ handleInputChange }
                        
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">Agree to terms and conditions</label>
                </div>

                <button type="submit" className="btn btn-outline-primary w-100">Create account</button>
            </form>
            <div className="mt-3">
                <p>or</p>
                
                <hr />
                <Link to="/login"> Already have an account? Sign in </Link>
            </div>

        </div>
    )
}

export default RegisterScreen
