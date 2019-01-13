import React, { Component } from 'react';

class IsPalindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
    		result: this.isPalindrome(prevState.value)
        }));
        
    }

    isPalindrome(word) {
        let result = '';
        for (let i = word.length-1; i >= word.length / 2; i--) {
          if (word[i] === word[(word.length -1) - i])
            result = true;
            else {
                result = false;
                break;
            }
        }
        return result;
    }

    outputResult(result) {
        if(result === null) 
            return;
        else {
            return result === false ? "This isn't a palindrome" :
            "It is a palindrome!"
        }
    }

    render() {
        return <div> 
            <form  onSubmit={this.handleSubmit}>
                <label>Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h3>Result: {this.outputResult(this.state.result)}</h3>
        </div>
    }
}

export default IsPalindrome;