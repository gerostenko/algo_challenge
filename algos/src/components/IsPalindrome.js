import React, { Component } from 'react';

class IsPalindrome extends Component {
   
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
        return result === null ? null : result === false ? "This isn't a palindrome" : "It is a palindrome!";
    }

    render() {
        return <div> 
            <form  onSubmit={(event) => this.handleSubmit(event)}>
                <label>Enter String:  
                    <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {this.state.result !== null && <h3>Result: {this.outputResult(this.state.result)}</h3>}
        </div>
    }
}

export default IsPalindrome;