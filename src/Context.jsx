// create context (warehouse)
// provider
// consumer / useContext hook

import React, { useContext, useEffect, useReducer } from "react";
import reducer from './Reducer'

const AppContext = React.createContext();

const API = "/images/adi.json";

const intialState ={
    name : "",
    image : "",
    services: [],


};


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState);
     
    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload : {
                    name: "Aditya Kunwar",
                    image: "./images/hero.svg",
    
                }
            }
        );
    };
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload : {
                    name: "Chotu Kunwar",
                    image: "./images/about1.svg",
    
                }
            }
        );
    };
    // to get the api data 
    const getServices = async (url) =>{
        try {
            // const res = await axios.get()
            const res = await fetch(url);
            const data = await res.json();
            dispatch( { type: "GET_SERVICES", payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    // to call the api
    useEffect ( () => {
       getServices(API);

    }, []);
    
    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage }}>{children}</AppContext.Provider>;


};

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext };
