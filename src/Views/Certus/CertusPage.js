import React from 'react';
import SideMenu from "./../Sidebar/Sidebar";

const CertusPage = ({ children }) => {
    return (
        <>
            <SideMenu></SideMenu>
            {children}
        </>
    )
}

export default CertusPage;
