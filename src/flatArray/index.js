export default function flatArray(data){
    if (!data || !Array.isArray(data)) throw new Error("Unparseable data provided");
    return data.reduce((accumulator, currentValue) => {
        if (currentValue instanceof Array) {
            return accumulator.concat(flatArray(currentValue));
        }
            return  accumulator.concat(currentValue);
    },[]);
}