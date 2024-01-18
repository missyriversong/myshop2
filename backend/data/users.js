import bcrypt from 'bcryptjs'


const users = [
  {
  name: 'Admin',
  email: 'admin@shop.com',
  password: bcrypt.hashSync('0123', 10),
  isAdmin: true
  },
  {
  name: 'Ted Tedderson',
  email: 'tted@gmail.com',
  password: bcrypt.hashSync('1234', 10),
  },
  { 
  name: 'Bex Bexson',
  email: 'bbex@gmail.com',
  password: bcrypt.hashSync('1234', 10),
}
]

export default users