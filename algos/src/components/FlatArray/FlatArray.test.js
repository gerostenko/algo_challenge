import React from 'react';
import { shallow } from 'enzyme';
import FlatArray from './FlatArray';
describe('FlatArray component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FlatArray />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('has a method to flatten the array', () => {
        expect(typeof FlatArray.prototype.flatArray).toEqual('function');
        expect(typeof FlatArray.prototype.parseInput).toEqual('function');
    });

    describe('component\'s parseInput ', () => {
        it('returns an error string if given unparseable non array values', () => {
            expect(FlatArray.prototype.parseInput(undefined) instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput(null) instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput({}) instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput('') instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput('1') instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput(1) instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput([]) instanceof Error).toEqual(true);
            expect(FlatArray.prototype.parseInput(true) instanceof Error).toEqual(true);
        });

        it('replaces single quotes with double quotes', () => {
            let arg = "['test']";
            expect(FlatArray.prototype.parseInput(arg)).toEqual(["test"]);
        });

        it('it parses into an array of objects the strings with arrays of objects', () => {
            let arg1 = '[{"a": 123}]';
            let arg2 = '[{"a": 1}, [{"b": 2}, {"c": 3}]]';

            expect(FlatArray.prototype.parseInput(arg1)).toEqual([{a: 123}]);
            expect(FlatArray.prototype.parseInput(arg2)).toEqual([{a: 1}, [{b: 2}, {c: 3}]]);
        });

        it('parses as expected mixed data types', () => {
            let arg = '[1, 2, ["test", 2, "test2", [{"a": "test"}], {"b": 123}]]';
            expect(FlatArray.prototype.parseInput(arg)).toEqual([1, 2, ["test", 2, "test2", [{a: "test"}], {b: 123}]]);
        });
    });
});