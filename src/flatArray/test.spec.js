import flatArray from './index';

describe('FlatArray', () => {
    it('returns an error string if given unparseable non array values', () => {
        expect(() => flatArray(undefined)).toThrow();
        expect(() => flatArray(null)).toThrow();
        expect(() => flatArray({})).toThrow();
        expect(() => flatArray("")).toThrow();
        expect(() => flatArray(1)).toThrow();
        expect(() => flatArray(true)).toThrow();
    });

    it("returns empty array if received an empty array", () => {
        expect(flatArray([])).toEqual([]);
    });

    it("it flattens nested arrays", () => {
        expect(flatArray([{"a": 123}])).toEqual([{a: 123}]);
        expect(flatArray([{"a": 1}, [{"b": 2}, {"c": 3}]])).toEqual([{a: 1}, {b: 2}, {c: 3}]);
        expect(flatArray([1, 2, ["test", 2, "test2", [{"a": "test"}], {"b": 123}]])).toEqual([1, 2, "test", 2, "test2", {a: "test"}, {b: 123}]);
    });
});