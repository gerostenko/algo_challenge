import React, { Component } from 'react';

class FlatArray extends Component {
    state = {
        value: '',
        result: null,
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
    		result: this.flatArray(JSON.parse(prevState.value))
        }));
    }

    flatArray(array){
        return array.reduce((accumulator, currentValue) => {
            if (currentValue instanceof Array) {
                return accumulator.concat(this.flatArray(currentValue));
            } 
                return  accumulator.concat(currentValue);
        },[]);
    }

    renderResult(){
        return this.state.result !== null && 
        <h3>Result: {this.state.result.map((item, index) => <p key={index}>{item}</p>)}</h3>
    }

    render(){
        return <div> 
            <form  onSubmit={(event) => this.handleSubmit(event)}>
                <label>Enter String:  
                    <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {this.renderResult()}
        </div>
    }
}

export default FlatArray;