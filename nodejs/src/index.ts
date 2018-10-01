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

    const data = [{
        name: 'control node',
        is_endpoint: false
      },{
        name: 'storage node',
        is_endpoint: true
      },{
        name: 'render node',
        is_endpoint: true
      },{
        name: 'node js',
        is_endpoint: true
      },{
        name: 'pacs',
        is_endpoint: true
      },{
        name: 'nginx',
        is_endpoint: false
      }];

    let NodeType = new node_type();

    let arrNodeType = data.map((elem) => {
        NodeType.name = Object.assign({}, elem.name);
        NodeType.is_endpoint = Object.assign({}, elem.is_endpoint);
        return NodeType;
    })

    console.log(arrNodeType);
    await connection.manager
            .save(arrNodeType)
            .then(() => {
                console.log("nodes have been saved.");
            })
            .catch(error => console.log(error));
    
}).catch(error => console.log(error));
