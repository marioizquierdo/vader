# Vader

Vader will be a language that compiles into JavaScript.

The goal is to maximize developer happiness with a clean and consistent sytax, while maintaining full compatibility with existing JavaScript libraries.


## Syntax Example

After spending a while designing the syntax and features

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
node lib/command.js ./examples/hello_world.vader
```

The parser is made from the grammar using [Pegjs](http://pegjs.org/). To make a new parser, fiddle with the grammar.pegjs file and then:

```
pegjs ./lib/grammar.pegjs parser.js
```



