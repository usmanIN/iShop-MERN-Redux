const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

exports.encryptPassword = (password) => {
    
    bcrypt.hash(password,SALT_ROUNDS).then(function(converted){      
        return converted;
    }); 
}

exports.decryptedPassword = (textpassword,hashpassword) => {
  
    bcrypt.compare(textpassword,hashpassword).then(function(response){
        return response;
    });

}