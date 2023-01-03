import React from  'react';
import './Footer.css';

function Footer(){
    return(   
        <> 
            <footer>
                <div className='footer-copyright text-center p-4'>Copyright © {new Date().getFullYear()} React Crud App</div>
            </footer>
        </>   
    );
}

export default Footer;