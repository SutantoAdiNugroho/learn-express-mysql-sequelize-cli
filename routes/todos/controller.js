const {todos} = require('../../db/models')

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await todos.findAll({ where: { email: req.params.email }})

            res.status(200).json({message: `Show all todos with email ${req.params.email}`, data: result})
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await todos.create(req.body)

            res.send({ message: 'Succes add todo', data: result})
        } catch (error) {
            console.log(error);
            
        }
    },
    updateOne: async(req, res) => {
        try {
            const result = await todos.update({ todo: req.body.todo }, { where: { id: parseInt(req.params.id) } })

            res.send({ message: `Succes update todo at ${req.params.id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async(req, res) => {
        try {
            const result = await todos.destroy({ where: { id: req.params.id }})

            res.send({ message: `Succes delete todo at ${req.params.id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}