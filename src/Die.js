import React, { Component } from 'react';
import './Die.css'
class Die extends Component {
    
    render() {
        const {face, rolling} = this.props;
        return <i className = {`Die fa-solid fa-dice-${face} ${rolling && 'rolling-animation'}`}></i>
    }
}

export default Die;