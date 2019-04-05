import React, { Component } from 'react';

class FlatArray extends Component {

    flatArray(array){
        console.log('flatArray called');
        array.reduce((accumulator, currentValue) => {
            console.log('reduce');
            console.log(accumulator);
            console.log(currentValue);
            let realAccum = [];
            if (currentValue instanceof Array) {
                realAccum = this.flatArray(currentValue);
            }
            realAccum = accumulator.concat(currentValue);
            console.log(realAccum);
            return realAccum;
        },[]);
    }

    render(){
        return(<div></div>);
    }
}

export default FlatArray;