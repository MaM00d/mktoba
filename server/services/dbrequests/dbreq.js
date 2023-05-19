
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function getuser(Id){

 const user = await prisma.user.findUnique({

  where: {
    id:Id 
  }
})
  return user;
}

async function getuserbyemail(eemail){
const user = await prisma.user.findUnique({

  where: {
    email:eemail 
  }
})

return user;
}
module.exports ={getuser,getuserbyemail};