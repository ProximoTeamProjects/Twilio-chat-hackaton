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
            ...user,
            [e.target.name]: e.target.value
        })

        console.log(user)

    }
    

    const handleSubmit = e => {

        const { name, lobby  } = user;

        e.preventDefault();

        if([name, lobby].includes('') ){

            setError(true);
            setAlerta('Todos los campos son obligatorios');
            console.log('Error')


        } else {
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
