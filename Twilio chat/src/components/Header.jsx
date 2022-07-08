import React from 'react'
import { Outlet } from 'react-router-dom'
import { Form } from './Form'

export const Header = () => {
  return (
    <>
        <header className='w-100 h-24 bg-emerald-300 flex justify-center items-center'>
            
            <h1 className='text-2xl font-bold tracking-tight '>Secret Chat</h1>

        </header>

        <Form />

        <Outlet />

    </>
  )
}
