import { compare } from "bcrypt";
import { Request, Response } from "express";
import Authentcation from "../utils/Authentication";
const db = require("../db/models");


class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password} = req.body;
        const hashedPassword: string = await Authentcation.passwordHash(password);

        const createdUser = await db.user.create({
            username,
            password : hashedPassword
        });

        return res.send(createdUser);
        // return res.send("Registrasi success")
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        // cari data user by username
        let { username, password } = req.body;

        const user = await db.user.findOne({
            where: { username }
        });

        // return res.send(user)

        //check password
        let compare = await Authentcation.passwordCompare(password, user.password);


        //generate token
        if (compare) {
            let token = Authentcation.generateToken(user.id, username, user.password);
            return res.send({
                token
            });
        }

        return res.send("auth failed");
    }

    profile = (req:Request, res:Response): Response => {
        return res.send(req.app.locals.credential);
    }
}

export default new AuthController();

