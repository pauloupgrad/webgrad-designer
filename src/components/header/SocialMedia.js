import React, { Component } from 'react';


class SocialMedia extends Component{
    render(){
        return(
        <div className="redes">
        <a href="https://www.facebook.com/webgrad.com.br/" target="_blang" title=""><i class="fab fa-facebook-f"></i></a>
        <a href="https://plus.google.com/+WebgradBr" title=""><i class="fab fa-google-plus-g"></i></a>
        <a href="https://github.com/pauloupgrad" title=""><i class="fab fa-github-alt"></i></a>
        <a href="https://twitter.com/webgraddesigner" title=""><i class="fab fa-twitter"></i></a>        
        </div>           
        );
    }
} 

export default SocialMedia;