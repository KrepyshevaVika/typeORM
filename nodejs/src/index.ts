import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer} from "routing-controllers";
import {NodeController} from "./controllers/NodeController";
import {node_type} from "./entity/NodeType";
import {node} from "./entity/Node";
var express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser');

<<<<<<< HEAD
var app = express();

app.use(bodyParser.json());
app.use(cors());

createConnection().then(async connection => {
    await connection.runMigrations();
   // await connection.undoLastMigration();
   // await connection.manager.clear(User);
   // await connection.manager.clear(node);
    //-----------------------------------------
   /* 
    await connection.manager
        .save([
            new node_type('nginx', false),
            new node_type('pacs', true),
            new node('node js server 1', null, null, 0,nodeTypeN, null),
            new node('node js server 2', null, null, 0,nodeTypeN, null),
            new node('storage node 1', null, null, 0,nodeTypeSN, networkNodeCN),
            new node('storage node 2', null, null, 0,nodeTypeSN, networkNodeCN),
            new node('render node 1', null, null, 0,new node_type('render node', true), networkNodeCN)
        ])
        .then(() => {
            console.log("nodeType have been saved.");
        })
        .catch(error => console.log(error));*/

    createExpressServer({
        controllers: [NodeController]
    }).listen(8080);
    console.log("Server is up and running on port 8080");
=======
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");

    //-------------------------------------------
    await connection.manager
            .save([
              new node_type('control node', false),
              new node_type('storage node', true),
              new node_type('render node', true),
              new node_type('node js', true),
              new node_type('pacs', true),
              new node_type('nginx', false)
            ])
            .then(() => {
                console.log("nodes have been saved.");
            })
            .catch(error => console.log(error));
>>>>>>> 0f484b875a9b4bc899b5139ae325181633f322bd
    
}).catch(error => console.log(error));
