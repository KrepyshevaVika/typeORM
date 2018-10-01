import "reflect-metadata";
import {JsonController, Param, Body, Get, Post, Put, Delete, Req} from "routing-controllers";
import {getManager, getRepository} from "typeorm";
import {Request, Response} from "express";
import {node} from "../entity/Node";

@JsonController()
export class NodeController {

    @Get("/nodes")
    getAllTop() {
       return getRepository(node).find({ where: { node_id: null }, relations: ["node_type", "node_id"],  order: {name: "ASC"} });
    }

    @Get("/nodes/all")
    getAll() {
       return getRepository(node).find();
    }

    @Get("/nodes/:id/children")
    getChildren(@Param("id") id: number) {
       return getRepository(node).find({ where: { node_id: id }, relations: ["node_type", "node_id"],  order: {name: "ASC"} });
    }

    @Get("/nodes/:id")
    getOne(@Param("id") id: number) {
       return getRepository(node).findOne({ where: { id: id }, relations: ["node_type", "node_id"] });
    }

    @Post("/nodes")
    post(@Body() networkNode: any) {
       return getRepository(node).insert(networkNode);
    }

    @Put("/nodes")
    put(@Body() networkNode: any) {
       return getRepository(node).update({ id: networkNode.id }, networkNode);
    }

    @Delete("/nodes/:id")
    remove(@Param("id") id: number) {
       return getRepository(node).delete(id);
    }
}
