
const bcrypt = require('bcrypt')

async function comparePassword(givenPassword,databasePassword){
    try {
        return await bcrypt.compareSync(givenPassword,databasePassword);
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    comparePassword
}