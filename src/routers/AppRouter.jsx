import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { login } from '../actions/auth';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';
import { firebase } from '../firebase/firebase-config'
import DashboardRouter from './DashboardRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false)
    const [isNotReady, setisNotReady] = useState(true)

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    useEffect(() => {
        firebase.auth().onAuthStateChanged( ( user ) => {
            if( user?.uid ){
                setIsLogged(true);
                dispatch( login(user.uid, user.displayName) )
            } else {
                setIsLogged(false);      
            }
            setisNotReady(false);
        })

    }, [dispatch])

    if(isNotReady){
        return(
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={ 
                    <PublicRoutes isLogged={ isLogged } lastPath={ lastPath } >
                        <LoginScreen />
                    </PublicRoutes>
                     } />

                <Route path="/register" element={ <RegisterScreen /> } />

                <Route path="/*" element={
                    <PrivateRoutes isLogged={ isLogged } >
                        <DashboardRouter />
                    </PrivateRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
