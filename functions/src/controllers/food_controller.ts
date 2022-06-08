import { Request, Response } from "express";
import { db } from "../index";
import { Food } from "../models/food_model";
import { Respuesta } from "../models/respuesta";

export async function createFood(req: Request, res: Response) {           
    try{                    
        const newFood = Food(req.body);

        const foodAdd = await db.collection("food").add(newFood);                            
        return res.status(201).json(Respuesta('Food agregado', `La comida fue agregada correctamente con el id ${foodAdd.id}`, newFood, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function consultarFood(req: Request, res: Response) {           
    try{
        const doc = await db.collection("food").doc(req.params.id).get();
        if(!doc) {
            return res.status(404).json(Respuesta('food no encontrado', `food con el id ${req.params.id} no encontrada`, {req}, 404));               
        }        
        return res.status(200).json(Food(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function listFood(req: Request, res: Response) {
    try {
        let snapshot = await db.collection("food").get();
        return res.status(200).json(snapshot.docs.map(doc => Food(doc.data(), doc.id)));
    } catch (err) {
        return handleError(res, err);
    }
};

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}