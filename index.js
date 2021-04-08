function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
 return string.toLowerCase()
 }


function logShout(string) {
console.log('hello'.toUpperCase());
}

function logWhisper(string) {
console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma(string) {
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase // true
return string
}

var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false