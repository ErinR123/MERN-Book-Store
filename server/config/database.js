
import * as mongoose from 'mongoose';


export default async function initDatabase(){
  let db;
  mongoose.connect(process.env.ATLAS_URI).then((_)=>{
    
    db = mongoose.connections[0];
    
    db.on('connected', function () {
      console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
    });
  }).catch((err) => {console.log(err)});
  
}

