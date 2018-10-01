import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer} from "routing-controllers";
import {NodeController} from "./controllers/NodeController";
import {node_type} from "./entity/NodeType";
import {node} from "./entity/Node";
var express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser');

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
    
}).catch(error => console.log(error));
