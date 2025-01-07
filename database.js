const mongoose=require('mongoose')

const connectDatabase=async ()=>{
    mongoose.connect(process.env.DB_URL)
        .then((data)=>{
            console.log("Database Connected Successfully.",data.connection.host)
        .catch((err)=>{
            console.log(`Connection failed ${err}`)
        })
        })
}

module.exports=connectDatabase;