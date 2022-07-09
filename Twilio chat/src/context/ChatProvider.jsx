import React from 'react'
import { useState } from 'react';
import { ChatContext } from './ChatContext';


export const ChatProvider = ({ children }) => {


    const [user, setUser] = useState({
        name: '',
        lobby:  ''
    });
    const [error, setError] = useState(false);
    const [alerta, setAlerta] = useState('');

    const handleInputChange = e => {   

        setUser({
            ...e,
            [e.target.name]: e.target.value
        })

    }
    

    const handleSubmit = e => {

        e.preventDefault();

        if([ user, lobby ].includes('') ){

            setError(true);
            setAlerta('Todos los campos son obligatorios');
            console.log(user)


        }

    }


  return (
    <ChatContext.Provider value={{
        handleSubmit,
        handleInputChange,
        user
    }}>

        { children }

    </ChatContext.Provider>
  )
}
