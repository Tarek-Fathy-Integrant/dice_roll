import React, { Component } from 'react';
import Die from './Die.js'
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            isRolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
        const dieRoll1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const dieRoll2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            die1: dieRoll1,
            die2: dieRoll2,
            isRolling: true
        });

        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000);
    }
    render() {
        const { die1, die2, isRolling } = this.state;

        return <div className='RollDice'>
            <div className='RollDice-container'>
                <Die face={die1} />
                <Die face={die2} />
            </div>
            <button onClick={this.roll} disabled = {isRolling}>
                {
                    isRolling ?
                        `Rolling...` :
                        `Roll Dice!`
                }
            </button>
        </div>
    }
}

export default RollDice;