import React from 'react'
import Footer from '../component/Footer'
import Header from './../component/header'
const MainLayout = (props) => {
    return (
        <div >
            <Header {...props}/>
            <div className='main'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout
