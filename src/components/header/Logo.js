import React, { Component } from 'react';


class Logo extends Component{
    render(){
        return(
        <div className="logo">
            <picture>                
                <img src="assets/images/logomarca-wd-white.png" alt="Logo Webgrad designer"/>
            </picture>
        </div>           
        );
    }
} 

export default Logo;