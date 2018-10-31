import React, { Component } from 'react';


class ButtonMob extends Component{
    constructor()
    {
        super();
        this.state={
            visNav: 'flex'
        }
    }
    // Fara a função de toggle
    clickMe()
    {
if(this.state.visNav === 'flex'){
    this.setState({
        visNav: 'none'
    });
}else{
    this.setState({
        visNav: 'flex'
    }); 
}
document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
            <img src="./assets/images/burguer-w.png" alt="Botao amburguer" />
            </div>
        );
    }
} 

export default ButtonMob;