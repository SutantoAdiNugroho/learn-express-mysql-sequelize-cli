const {users} = require('../../db/models')

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await users.findAll({raw:true})

            res.status(200).json({message: `Show all users`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}