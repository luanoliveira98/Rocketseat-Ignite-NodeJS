# Fundamentals of NodeJS

## What is NodeJs?
* NodeJS is an open source platform that allows the execution of javascript language on the server side
* NodeJS is composed of v8, a javascript interpreter created by Google, it was developed to be used in Chrome (but nowadays it is also used by others browsers), which allows the execution of javascript to be done much faster. V8's responsibility is to get the javascript code and show it to the browser  so that it can interpret it
* NodeJS is composed of libuv too, it is a cross-platform library focusing on asynchronous I/O (initially libuv was developed only for NodeJS, but nowadays it is used in other scenarios and languages as well). So when we join v8 and libuv it makes NodeJS render faster

### What did NodeJS come to solve?

NodeJS was created by Ryan Dahl, he was working on an application that acessed flickr and when he went to see how the flickr process bar worked, he saw that in order to check how the processing percentage was, you needed to keep making request to the backend. With that, he discovered that the technologies of the time did not support the I/O process well, which led him to want to study and create a language that would work so well with asynchronous I/O that would solve this problem that he was suffering with the flickr process bar

### NodeJS features

* Event Loop Arctecture
  * Call Stack
* Single Thread
* Non-blocking I/O
* Own modules
  * http
  * dns
  * fs
  * buffer

### What are package managers?

* NPM and Yarn
* Install external libraries
* Provide libraries

### Frameworks

* Express
* Egg.js
* Nest.js
* Adonis.js

## What is API?

* Application Programming Interface
* It is a especifications set of possible interactions between applications
* Documentation to developer

### What is REST?

* Representation State Transfer
* Arctecture model

### Rest Rules

1. **Client-Server:** that is the basic rule of REST, on one side is the client and on the other side is the server, which separates the responsibility between both.
2. **Stateless:** client can make as many request as it wants, but the server does not store any request state or session. Thus, with each request made, it is necessary to pass all the necessary information for that request to be processed.
3. **Cache:** it is necessary to ensure that the application can support cache.
4. **Uniform Interface:** it is like client and server will share the interface, it is like a contract
  * **Resources identification:** 
    * __http://serveraddress.com/products__
    * __http://serveraddress.com/clients__
  * **Resources representation:** this means that the server can send requests in a format like JSON, XML, HTML or any other form.
  * **Self descriptive messages:** it is important to return to client descriptive messages
  * **HATEOAS (Hypertext As The Engine Of Application State):** to return links inside response.
5. **Layers:** the application must allow for layers between client and server
6. **Código Sob Demanda:** allows client functions to be extended in forms of scripts or mini applications

## HTTP Verbs

* **GET -** reading
* **POST -** creation
* **PUT -** update
* **DELETE -** deletion
* **PATCH -** partial update

### HTTP Codes

* **1XX:** Informational — request was accepted or process is still ongoing
* **2XX:** Confirmation
  * **200 -** Request was successfully
  * **201 -** Created — Frequently used for POST after an insert
* **3XX:** Redirection
  * **301 -** Moved Permanently
  * **302 -** Moved
* **4XX:** Client error
  * **400 -** Bad Request
  * **401 -** Unauthorized
  * **403 -** Forbidden
  * **404 -** Not Found
  * **422 -** Unprocessable Entity
* **5XX:** Server error — server failed to conclude request
  * **500 -** Internal Server Error
  * **502 -** Bad Gateway

### Request Params

* **Header Params:** are the parameters sent in the request header, such as tokens and session control
* **Query Params:** are the parameters inserted at the end of the url, such as pagination
* **Route Params:** are the parameters inserted at the middle of the url, such as ids
* **Body Params:** are the parameters sent in the request body

### REST API best practices

* Correct use of HTTP methods
* Correct use of HTTP codes when returning responses
* Naming pattern
  * Users search — GET
    * __http://serveraddress.com/v1/users__
  * User search by ID — GET
    * __http://serveraddress.com/v1/users/1__
  * User's address search — GET
    * __http://serveraddress.com/v1/users/1/address__
  * User creation — POST
    * __http://serveraddress.com/v1/users/__
  * User update — PUT
    * __http://serveraddress.com/v1/users/1__
  * User delete — DELETE
    * __http://serveraddress.com/v1/users/1__
  * User's status update — PATCH
    * __http://serveraddress.com/v1/users/1/status__