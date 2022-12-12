# Fundamentals of NodeJS

## What is NodeJs?
* NodeJS is an open source platform that allows the execution of javascript language on the server side.
* NodeJS is composed of v8, a javascript interpreter created by Google, it was developed to be used in Chrome (but nowadays it is also used by others browsers), which allows the execution of javascript to be done much faster. V8's responsibility is to get the javascript code and show it to the browser  so that it can interpret it.
* NodeJS is composed of libuv too, it is a cross-platform library focusing on asynchronous I/O (initially libuv was developed only for NodeJS, but nowadays it is used in other scenarios and languages as well). So when we join v8 and libuv it makes NodeJS render faster.

## What did NodeJS come to solve?

NodeJS was created by Ryan Dahl, he was working on an application that acessed flickr and when he went to see how the flickr process bar worked, he saw that in order to check how the processing percentage was, you needed to keep making request to the backend. With that, he discovered that the technologies of the time did not support the I/O process well, which led him to want to study and create a language that would work so well with asynchronous I/O that would solve this problem that he was suffering with the flickr process bar.