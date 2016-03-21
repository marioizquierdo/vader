# VaderScript

JavaScript is beautiful in its core simplicity, but heavily damaged by countless land mines that quickly turn your dreams into nightmares.
What if you had the power to throw those mines away, move faster, while still having full access to the whole empire of exising libraries?


## Why Yet Another JavaScript Transpiler?

Some other languages are "just JavaScript", or a "superset of JavaScript", or "not JavaScript", or have some limited "interop with JavaScript" ...

VaderScript could be described as "not just JavaScript", as it translates in a pretty straighforward way, but is not afraid to go one step further to maximize on the "good parts".


## Syntax Example

None!

After spending a while designing the syntax and features, I realized that need to build a simple compiler first. Once I know I can build it, I'll come back to syntax and crazy features ...


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



