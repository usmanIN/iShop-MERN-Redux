const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

exports.encryptPassword = (password) => {
    
    bcrypt.hash(password,SALT_ROUNDS).then(function(converted){
        return converted;
    }); 
}

exports.decryptedPassword = async (textpassword,hashpassword) => {
  
    const success =  await bcrypt.compare(textpassword,hashpassword);
 
    return success;
}