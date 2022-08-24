import React, { Component } from 'react';
import Die from './Die.js'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"] 
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one"
        }
        this.roll = this.roll.bind(this)
    }
    roll(){
        const dieRoll1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const dieRoll2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({die1 : dieRoll1, die2 : dieRoll2});
    }
    render() {
        return <div>
            <Die face = {this.state.die1} />
            <Die face = {this.state.die2} />

            <button onClick = {this.roll}>Roll Dice!</button>
        </div>
    }
}

export default RollDice;