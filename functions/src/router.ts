import { Application } from "express";
import { registro } from './controllers/autenticacion_controller';

import { listFood, createFood, consultarFood } from "./controllers/food_controller";


export function routes(app: Application){
    app.get('/api/food', listFood);
    app.post('/api/food', createFood);
    app.get('/api/food/:id', consultarFood);
    app.post('/api/registro', registro);
}