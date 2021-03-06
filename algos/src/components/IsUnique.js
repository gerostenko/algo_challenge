import React, { Component } from 'react';

class IsUnique extends Component {
    state = {
        value: '',
        result: null
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
    		result: this.isUnique(prevState.value)
        }));
    }

    isUnique(word){
        let chars = '';
          //there are 256 characters in extended ASCII
        if (word.length > 256)
            return false;
      
        for (let char of word) {
            if(chars.indexOf(char) > -1) {
                return false;
            }
            chars += char;
        }   
        
        return true;
    }

    outputResult(result) {
        return result === null ? null : result === false ? "This isn't a unique string" : "It is a unique string!";
    }

    render(){
        return(<div>
            <form  onSubmit={(event) => this.handleSubmit(event)}>
                <label>Enter string: 
                    <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {this.state.result !== null && <h3>Result: {this.outputResult(this.state.result)}</h3>}
        </div>);
    }
}

export default IsUnique;