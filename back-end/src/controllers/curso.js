import prisma from "../dataBase/client";

const controller = {}

controller.create = async function(req, res) {
    try {
        await prisma.curso.create({data: req.body})
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

export default controller