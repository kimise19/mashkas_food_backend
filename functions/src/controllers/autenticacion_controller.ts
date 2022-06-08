import * as admin from 'firebase-admin';
import { Request, Response } from "express";
import { Respuesta } from '../models/respuesta';

export async function registro(req: Request, res: Response) {
    try{
        const { email, password, displayName, userName } = req.body;
        const user = await admin.auth().createUser({
            email,
            password,
            displayName
        });
        await admin.auth().setCustomUserClaims(user.uid, { userName });
        return res.status(201).json(Respuesta('Usuario creado', `Usuario ${user.displayName} creado y nombreUsuario ${userName}`, user,201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}