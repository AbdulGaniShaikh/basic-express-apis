# Basic REST API using Express

Express REST API for CRUD operations on a JavaScript array. This simple and lightweight project serves as a foundation for building RESTful APIs with Express, focusing on basic Create, Read, Update, and Delete operations on an in-memory JavaScript array. Ideal for learning and quick prototyping.

## Features
* Node.js
* Express
* REST API

## How to run
1. Clone the project

        git clone https://github.com/AbdulGaniShaikh/basic-express-apis.git

2. Install the packages and start the Express server

        npm install
        npm start


## Routes/APIs


<details>
    <summary>
        <code>POST</code>
        <code>/users</code>
        <code>create a new user</code>
    </summary>

##### Request Body `JSON`

    {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 20
    }

##### Response `JSON`

    {
        "id": "eca4b3fc-0cbf-4a95-95a9-3e9b4ade6171",
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 20
    }


</details>

<details>
    <summary>
        <code>GET</code>
        <code>/users/:id</code>
        <code>returns all the users</code>
    </summary>

##### Parameters

|name|required|in|
|-|-|-|
|id|true|path|

##### Response `JSON`

    {
        "id": "eca4b3fc-0cbf-4a95-95a9-3e9b4ade6171",
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 20
    }


</details>


<details>
    <summary>
        <code>PATCH</code>
        <code>/users/:id</code>
        <code>update details of user(only updates the given data)</code>
    </summary>

##### Parameters

|name|required|in|
|-|-|-|
|id|true|path|

##### Request Body `JSON`

    {
        "firstName": "Johnny",
        "lastName": "Doe",
    }

##### Response `JSON`

    {
        "id": "eca4b3fc-0cbf-4a95-95a9-3e9b4ade6171",
        "firstName": "Johnny",
        "lastName": "Doe",
        "age": 20
    }


</details>

<details>
    <summary>
        <code>DELETE</code>
        <code>/users/:id</code>
        <code>create a new user</code>
    </summary>

##### Parameters

|name|required|in|
|-|-|-|
|id|true|path|

##### Response `TEXT`

    user deleted


</details>

<details>
    <summary>
        <code>GET</code>
        <code>/users</code>
        <code>returns all the users</code>
    </summary>

##### Response `JSON`

    [
        {
            "id": "eca4b3fc-0cbf-4a95-95a9-3e9b4ade6171",
            "firstName": "John",
            "lastName": "Doe",
            "age": 21
        },
        {
            "id": "eca4b3fc-0cbf-4a95-95a9-3e9b4ade6171",
            "firstName": "Jane",
            "lastName": "Doe",
            "age": 20
        }
    ]

</details>