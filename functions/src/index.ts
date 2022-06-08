import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import { routes } from "./router";

//========== FIREBASE CREDENCIALES ==========//
admin.initializeApp(functions.config().firebase);
//========== FIREBASE BASE DE DATOS ==========//
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true, timestampsInSnapshot: true })

//========== SERVIDOR EXPRESS ==========//
const server = express();
server.use(cors({ origin: true }));

//========== RUTAS ==========//
routes(server);

//========== EXPORTACIÓN DEL SERVIDOR ==========//
export { db };
export const api = functions.https.onRequest(server);





// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });