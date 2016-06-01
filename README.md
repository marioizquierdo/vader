# VaderScript

JavaScript is beautiful in its core simplicity, but heavily damaged by countless land mines that quickly turn your dreams into nightmares.

What if you had the power to throw those mines away, move faster, while still having full access to the whole empire of exising libraries?


## Why Yet Another JavaScript Transpiler?

Some other languages are "just JavaScript", or a "superset of JavaScript", or "not JavaScript", or have some limited "interop with JavaScript" ...

VaderScript could be described as "not just JavaScript", as it translates in a pretty straighforward way, but is not afraid to go one step further to maximize on the "good parts".


## Syntax Overview

```
// Variables (lexically scoped)
number = 1
darkSide = true

// Constants (begin with a capital letter)
PI = 3.14159265
PI = 44 // TypeError: Assignment to constant variable

// Arrays
list = [1, 2, 3, 4, 5]

// Objects
systems = { shields: "ready", motor: "on" }
troops = {
  joe: {
    weapon: "pistol"
    level:  8
  }
  ida: {
    weapon: "sable"
    level:  10
  }
}

// Functions
add = (x, y) -> { x + y }
add(3, 5) // returns 8
add(3) // TypeError: argument 'y' can not be undefined

// Default parameters (param=val)
initials = (fullName, separator=".") -> fullName.split(" ").map(-> $0.charAt(0)).join(separator)
initials("Hommer J Simpson") // returns "H.J.S"
initials("Hommer J Simpson", "--") // returns "H--J--S"

// Named parameters ({params})
total = ({value, tax, discount}) -> value + tax - discount
total(value: 100, tax: 10, discount: 5) // returns 105

// Regular, Named and Default parameters combined
total = (value, {tax = value*0.1, discount = 0}) -> subtotal + tax - discount
total(100) // returns 110
total(100, tax: 12, discount: 5) // returns 107

// Dynamic Type Checks
x = 4
x is :number // true
x is :string // false
x as :string // "4"

mul = (x:number, y:number = 1) -> { x * y }
mul("foo") // TypeError: argument x:number can not have value "foo"

// Pattern Matching
fib = ~> {
  (n:number) when n < 0 -> throw new ArgumentError("negative number")
  (0) -> 0
  (1) -> 1
  (n:number) -> fib(n-1) + fib(n-2)
}
fib(5) // returns 8
fib(null) // ArgumentError: fib function does not match argument null

// Handling null and undefined (?)
obj = {}
obj.foo // Error: property foo is undefined
obj.foo? // returns undefined
obj.foo?.var?.stuff? // undefined

val = obj.foo ? "default" // obj.foo or "default" if foo is null or undefined 

obj.foo ?= "default" // assigns only if null or undefined (set default)
obj.foo // returns "default"
obj.foo ?= "something else" // not assigned, already had value "default"
obj.foo // returns "default" (was not modified)
```

More details: https://gist.github.com/marioizquierdo/ecbe19b791a632c47816cf20e7ed909a

## Usage

Don't!

At this point this is just an experiment and should not be used.


## Development

Clone repo and go to the project root folder.

Install dependencies:

```
npm install
```

Compile examples:

```
node lib/vader_command.js ./examples/hello_world.vader
```

The parser is made from the grammar using [Pegjs](http://pegjs.org/). To make a new parser, fiddle with the grammar.pegjs file and then:

```
pegjs ./lib/grammar.pegjs parser.js
```



