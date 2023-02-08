"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Adi" },
    { id: 2, name: "Edi" },
    { id: 3, name: "Odi" },
    { id: 4, name: "Udi" },
    { id: 5, name: "Padi" },
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({ id, name });
        return res.send("create success");
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;
        return res.send("update success");
    }
    delete(req, res) {
        const { id } = req.params;
        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
}
exports.default = new UserController();
