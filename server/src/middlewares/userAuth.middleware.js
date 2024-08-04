import config from '../config/config.js'
import jwt from 'jsonwebtoken'
import User from '../models/users.model.js'

const userAuth = async ( req, res, next) => {
    if(req.headers){
        const token = req.headers.token

        const verify = jwt.verify(token,config.secret)
        if(verify){
            const findUser = await User.findOne({_id:verify.id})
            if(findUser){
                req.user = findUser
                next()
            }else{
                res.json({msg:"User Not Found"});
            }
        }else{
            res.json({msg:"Invalid Token"});
        }
    }else{
        res.json({msg:"No Token Provided"});
    }
}

export default userAuth;