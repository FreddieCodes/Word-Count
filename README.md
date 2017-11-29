# Word-Count
#### Version 1.0.0
Word Counter allows you to load a book into the app and outputs all the individual words and the number of times they appear in the book.
It also shows you if the word count for each individual item is a prime number.

## User Stories
```
As a User
so that I can see how many individual words there are in a book
I want to be able to be able to output all the indivual words
```
```
As a User
so that I can see how many times an individual word is repeated
I want to be able to count every repeated word in the text file
```

```
As a User
so that I can see if the number of times each word appears is a prime number
I want to be able checks if a number is prime or not
```

## How to install

In your command line type the following: To clone this repository:

- `$ git clone https://github.com/FreddieCodes/Word-Count.git`

- `$ npm install` (node must be installed https://nodejs.org/en/)

## How to run the app

- In your terminal navigate to the the Word-Count directory:
- `node app` Will run a sample of the app.
- The output will appear in the terminal.
- To select your own book simply place the .txt file into the root directory and call it in the app.js by changing the argument in the runApp to the filename of your book. e.g. `runApp('bookname.txt')`
- then run with `node app` in the terminal

example output below:
```
Word | Count | Prime
the | 54 | false
railway | 4 | false
children | 5 | true
by | 1 | false
e | 232 | false
nesbit | 1 | false
to | 14 | false
my | 2 | true
dear | 1 | false
son | 3 | true
paul | 1 | false
bland | 1 | false
behind | 1 | false
whose | 1 | false
knowledge | 1 | false
```
## How to test

- In your terminal navigate to the the Word-Count directory:
- Run `npm test`.
- All the tests will appear in the terminal.
- All tests passing.

## Tech

I have used different technologies to achieve my goal:

- JavaScript
- Node.js
- Jasmine (testing)

## My approach

My approach was to first diagram how I wanted the app to work structurally.
My next step was to then decide on how I wanted to receive the file, either locally using fs or to request the file through an http request, I went with the fs.readFileSync method.
As well as this I decided that making this call synchronous was the better option.

I had a lot of ideas about what pattern to use and in the end settled for the prototype design pattern as it's more efficient than using the constructor pattern in this instance.
I wanted there to be a Book object which had functions that would turn the .txt document into a string and an array.  
I then sort to create a Word object which would have a word, count and prime property which would make iterating through the array and outputting the values straightforward and useful for later changes as it would have all the data needed already in JSON format.
I also wanted there to be a controller to control the outputting of data and to encapsulate some of the data using an IIFE. 

Once I'd mapped out these ideas I started to right my tests and implement.

All my functions have been tested using jasmine. I tried to be driven by testing first so I could implement my code in a better way and so I did.

## Positives

- TDD used throughout
- The app is fully functional and meets all specifications
- DRY principles upheld


## Things to change
- Further refactoring of modules and prototypes
- Cut down the size of the countWords function
- Remove some behaviour from the Book module into another module.
- More comprehensive testing of the creation of Word objects within functions.
- Allow the app to work with books stored in urls. (http)
- Create a view using JSON 
- Simplifying the app, I may have overcomplicated it.
