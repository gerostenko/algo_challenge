import React, { Component } from 'react';
import IsPalindrome from './IsPalindrome';

class AlgoMain extends Component {
    constructor(props) {
		super(props);
        this.state = {
            algorithms: ['IsPalindrome', 'IsUnique'],
            selection: null
        }
       
    }
    
    handleClick = (algo, event) => {
        event.preventDefault();
        console.log(algo);
    }
    render() {
        return <div> 
                {this.state.algorithms.map((algo, i) => 
                    <div>
                        <button value={algo} key={i} onClick={(event) => this.handleClick(algo, event)}>
                            {algo}
                        </button>
                    </div>)}
                </div>
    }
}

export default AlgoMain;