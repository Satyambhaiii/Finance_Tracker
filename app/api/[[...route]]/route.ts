import { z } from 'zod'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from "@hono/zod-validator"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import  accounts from './accounts'
import categories  from './categories'
import transactions from './transactions'
import {HTTPException} from "hono/http-exception"
import summary from "./summary"


export const runtime = 'edge'
const app = new Hono().basePath("/api")


    const routes = app
    .route('/accounts',accounts)
    .route("/categories",categories)
    .route("/transactions",transactions)
    .route("/summary",summary)
    export type AppType = typeof routes

// no more api file routing
export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

// end to end safety with Apptype

// app
// .get('/hello', 
//     clerkMiddleware(),
//     (c) => {
//         const auth = getAuth(c);
//         if(!auth?.userId){
//             return c.json({error:'Unauthorized'});
//         }
//         return c.json({
//             message: 'Hello Next.js!',
//             userId: auth.userId,
//         })
//  }) 

//   .get("/hello/:test",
//     (c) => {
//     return c.json({
//     message: 'Hello Next.js!',
//     })
// })
//  .post(
//     "/create/:postId",
//     zValidator("json",z.object({
//         name: z.string(),
//         userID: z.number(),
//     })),
//     zValidator("param",z.object({
//         postId: z.number(),
//     })),
//     (c) => {
//       const {name,userID} =c.req.valid("json");   
//       const {postId} =c.req.valid("param");       
//     return c.json({});
// })

