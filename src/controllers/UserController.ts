import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";

let data: any[] = [
    {id:1, name: "Adi"},
    {id:2, name: "Edi"},
    {id:3, name: "Odi"},
    {id:4, name: "Udi"},
    {id:5, name: "Padi"},
]

class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        data.push({ id, name });

        return res.send("create success")
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id ==id);
        person.name = name;

        return res.send("update success");
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
}

export default new UserController();

