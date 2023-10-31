const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const { generalAccessToken, generalRefreshToken } = require("./JwtService")

const createUser = (newUser) => {
    return new Promise ( async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null){
                resolve({
                    status: 'OK',
                    message: 'This email has already been used.'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            console.log
            const createUser = await User.create({
                name, 
                email, 
                password: hash, 
                phone
            })
            if(createUser) {
                resolve({
                    status: 'OK',
                    message: 'Success created new user',
                    data: createUser
                })
            }        
        }catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise ( async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)

            if (!comparePassword) {
                resolve({
                    status: 'ERR',
                    message: 'The password or user is incorrect'
                })
            }  

            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            
            const refresh_token = await generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            }) 

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            }) 
        }catch (e) {
            reject(e)
        }
    })
}

const updateUser = (id, data) => {
    return new Promise ( async (resolve, reject) => {
        try {
            const checkUser = await User.findOne(id)
            console.log('checkUser', checkUser)

            resolve({
                status: 'OK',
                message: 'SUCCESS',
            }) 
        }catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser
}