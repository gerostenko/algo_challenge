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
    		result: this.flatArray(this.parseInput(prevState.value))
        }));
    }

    parseInput(input) {
        let error = new Error('Error: The object is not parseable');

        if (!input || !(typeof input === 'string')) return error;

        let result = input.replace(/'/g, '"');

        try {
            result = JSON.parse(result);
        }
        catch(e) {
            return error;
        }

        if (!(result instanceof Array)) return error;

        if(input.indexOf('{') > -1 && input.indexOf('}') > -1) {
            let myResult = [];

            for(let i in result) {
                myResult.push(result[i]);
            }
            return myResult;
        } else {
            return result;
        }
    }

    flatArray(data){
        if (data instanceof Error) return [data.message];
        return data.reduce((accumulator, currentValue) => {
            if (currentValue instanceof Array) {
                return accumulator.concat(this.flatArray(currentValue));
            } 
                return  accumulator.concat(currentValue);
        },[]);
    }

    renderResult(){
        return this.state.result !== null && 
        <h3>Result: {this.state.result.map((item, index) => <p key={index}>{JSON.stringify(item)}</p>)}</h3>
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