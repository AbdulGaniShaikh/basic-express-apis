import {v4 as uuid} from 'uuid';

var users = [
    {
        id:uuid(),
        firstName: 'John',
        lastName: 'Doe',
        age: 21,
    },
    {
        id:uuid(),
        firstName: 'Jane',
        lastName: 'Doe',
        age: 20,
    }
]

export const getUser = (req, res)=>{
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    if (!user) {
        res.status(404);
        res.send(JSON.parse('{"message":"Invalid user id"}'));
    }
    res.send(user);
}

export const getAllUsers = (req, res)=>{
    res.send(users);
}

export const createUser =(req, res)=>{
    let body = req.body;
    let userWithId = {id:uuid(),...body}
    users.push(userWithId);
    res.send(userWithId);
}

export const updateUser = (req, res)=>{
    const {firstName,age,lastName} = req.body;
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(user);
}

export const deleteUser = (req, res)=>{
    let id = req.params.id;
    let length = users.length;
    users = users.filter(user => user.id != id);
    if(length==users.length){
        res.send(JSON.parse('{"message":"Invalid user id"}'));
    }
    res.send("user deleted");
}