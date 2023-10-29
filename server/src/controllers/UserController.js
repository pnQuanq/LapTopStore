const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const {name, email, password, confirmPassword, phone } = res.body
        if(!name || !email|| !password|| !confirmPassword|| !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        }else if(password != confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is equal'
            })
        }
        console.log('isCheckEmail', isCheckEmail)
        const res = await UserService.createUser()
        return res.status(200).json()
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}