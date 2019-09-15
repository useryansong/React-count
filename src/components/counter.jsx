import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import {Button, Toast} from 'antd-mobile'
export default class Counter extends Component {

    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired

    }


    increase = () => {
        //1. get the count number
        const number = this.select.value*1
        //2.use the funtion of store to update state
        this.props.increment(number)
       
        
    }

    decrease = () => {
        //1. get the count number
        const number = this.select.value*1

        this.props.decrement(number)
        
    }

    increaseIfOdd = () => {
        //1. get the count number
        const number = this.select.value*1
        
        const count= this.props.count
        //.Check the state
        if (count%2===1) {
            //update state
            this.props.increment(number)
        }
        
    }

    increaseAsync = () => {
        //1. get the count number
        const number = this.select.value*1

        this.props.incrementAsync(number)
    }
        

    render() {
        const {count} = this.props
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick = {this.increase}>+</button>
                    <button onClick = {this.decrease}>-</button>
                    <button onClick = {this.increaseIfOdd}>increase if odd</button>
                    <button onClick = {this.increaseAsync}>increase async</button>
                </div>
            </div>
        )
    }
}
