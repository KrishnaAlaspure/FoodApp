const mongoose=require('mongoose');
const URL="mongodb+srv://gofoodadmin:KNkNQpO0Lt4iZxga@cluster0.ijju2mj.mongodb.net/goFoodData"
            

const mongoDB=()=>{
    mongoose.connect(URL)
    .then(()=>{
        console.log("connected to mongoDB")
        
        // const fetchData=  mongoose.connection.db.collection("food_items")
        // fetchData.find({}).toArray(function(err,data){
        //     if(err) console.log(err);
        //     else console.log(data);
        // })
        
    })
    .catch((err)=>{
        console.log(err)
    })
    const connection = mongoose.connection;
    console.log(connection);

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async function () {

  const collection  = connection.db.collection("food_items");
  collection.find({}).toArray(function(err, data){
      console.log(data); 
  });

});

}
module.exports =mongoDB

