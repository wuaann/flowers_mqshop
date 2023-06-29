import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Home from "./features/Home/pages/Home";
import Layout from "./components/Layout";
import Detail from "./features/Home/pages/Detail";
import Login from "./features/Auth/Login";
import {useSelector} from "react-redux";
import AuthUtils from "./utils/AuthUtils";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
    let token = null;
    const getToken = useSelector(state => state.auths.token)
    if (getToken) {
        token = getToken
    } else {
        token = AuthUtils.getToken();
    }

    return (
        <BrowserRouter>
            <ToastContainer/>
                <Routes>
                    {
                        token ?
                            <>

                                <Route path="/" element={<Layout/>}>
                                    <Route index element={<Home/>}/>
                                    <Route path={'/detail'} element={<Detail/>}/>
                                    <Route path={'*'} element={<Home/>}/>
                                </Route>
                            </>
                            :
                            <>
                                <Route path={'/login'} element={<Login/>}/>
                                <Route path={'*'} element={<Login/>}/>
                            </>

                    }
                </Routes>
        </BrowserRouter>
    );
}

export default App;
