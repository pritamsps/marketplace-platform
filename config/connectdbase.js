const mongoose=require('mongoose');

const connectdbase= ()=>{
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log("mongo db connected to host:"+con.connection.host)
    })

};
module.exports=connectdbase;