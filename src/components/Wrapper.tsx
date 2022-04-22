import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
export const Wrapper = (props) => {
    return <div>
        <NavBar/>
            <div className='container'>
                {props.children}
            </div>
        <Footer/>
    </div>
}