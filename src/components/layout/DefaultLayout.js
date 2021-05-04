import React from 'react'
import {  Header} from "./partials/Header.comp";
import {Footer} from './partials/Footer.comp'

export const DefaultLayout = ({children}) => {
    return (
        <>
        <div className="default-layout">
           
               <Header />
               </div>
          <div className="main">
               {children}
          </div>
           
           <div className="footer">
               <Footer />
           
        </div>
        </>
    )
}
