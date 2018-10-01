import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {node_type} from "./entity/NodeType";

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
    
}).catch(error => console.log(error));
