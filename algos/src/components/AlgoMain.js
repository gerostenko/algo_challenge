import React, { Component } from 'react';
import IsPalindrome from './IsPalindrome';
import IsUnique from './IsUnique';

class AlgoMain extends Component {
    constructor(props) {
		super(props);
        this.state = {
            selection: null
        }
        this.components = {
            IsPalindrome: IsPalindrome,
            IsUnique: IsUnique
        };
    }
    
    handleClick = (algo, event) => {
        event.preventDefault();
        this.setState({ selection: algo });
    }

    renderSelectedAlgo = () => {
        if(!this.state.selection) return null;
        const ComponentName = this.components[this.state.selection];
        return <ComponentName />;
    }

    render() {
        return <div> 
                {Object.keys(this.components).map((algo, i) => 
                        <button value={algo} key={i} onClick={(event) => this.handleClick(algo, event)}>
                            {algo}
                        </button>
                )}
                <br/><br/>
                <div>{this.renderSelectedAlgo()}</div>
                </div>
    }
}

export default AlgoMain;