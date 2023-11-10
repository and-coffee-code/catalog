interface Calculator {}

const Increment = new (class Increment implements Calculator {});
const Decrement = new (class Decrement implements Calculator {});
class Value implements Calculator {
    value: number;
    constructor(v: number) {
        this.value = v;
    }
}

const a: Calculator = Increment
const b: Calculator = Decrement
const c: Calculator = new Value(10)

type Match<T, R> = (ty: T) => R;

type Matcher<T, R> = {
    [k: string]: Match<T, R>
}

const m = ({
    'Increment': (x) => 1,
    'Decrement': (x) => 2,
    'Value': (x) => 3,
}) as Matcher<Calculator, number>

function match<T, R>(match: Matcher<T, R>, value: T) : R {
    const ctor: string = (value as any).constructor.name;
    return match[ctor](value);
}

console.log(match(m, a))
console.log(match(m, b))
console.log(match(m, c))
