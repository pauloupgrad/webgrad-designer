import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component{
    render(){
        return(
           <div className="nav">
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#sobre'>Quem sou</AnchorLink>
                <AnchorLink href='#servicos'>Serviços</AnchorLink>
                <AnchorLink href='#portfolio'>Portfólio</AnchorLink>
                <AnchorLink href='#blog'>Blog</AnchorLink>
                <AnchorLink href='#contato'>Contato</AnchorLink>
           </div>
        );
    }
} 

export default Nav;