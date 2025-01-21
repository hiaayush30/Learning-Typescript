//Type gaurds and Ts utility types


function abcd(arg: string | number) {
    if (typeof arg === "number") {
        arg.toFixed(10);
    } else {
        arg.toLowerCase();
    }
}