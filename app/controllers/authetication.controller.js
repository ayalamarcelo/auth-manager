import bcrypt from "bcryptjs";

const users = [{
    user: "Maria",
    email: "admin@email.com",
    password: "5441"
}]

async function login(req, res) {

}

async function register(req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email) {
        res.status(400).send({status:'Error', message:"Fields are incompletes"});
    }
    const checkUser = users.find(user => user.user === user);
    if(checkUser) {
        res.status(400).send({status:'Error', message:'User already exists'});
    }
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser =  {
        user, email, password: hashPassword
    }
    console.log(newUser),
    users.push(newUser);
    res.status(201).send({status:"ok", message:`User ${newUser} added`, redirect: "/"});
}

export const methods = {
    login, 
    register
}