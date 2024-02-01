import jwt from 'jsonwebtoken';


const generateToken = (id) => {
  return jwt.sign({id}, process.env.SECRET_JWT, {expiresIn: '30d'}) //pass payload   id:id
}


export default generateToken