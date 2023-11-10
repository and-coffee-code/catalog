// Declaring the constructors
const Increment = new (function Increment() {});
// undefined

const Decrement = new (function Decrement() {});
// undefined

function Value(v) { this.value = v; }
// undefined

function typeIs(type, instance) {
  return type == instance.constructor;
}
// undefined


Value.prototype.equals = function (b) {
  return typeIs(Value, b) && this.value == b.value;
}
// [Function (anonymous)]

Increment.equals = Decrement.equals = function (b) {
  return this == b;
}
// [Function (anonymous)]


// Examples

Increment.equals(Increment);
// true

Decrement.equals(Increment);
// false

(new Value(10)).equals(new Value(10));
// true

(new Value(10)).equals(new Value(1));
// false

Increment.equals(new Value(10));
// false

