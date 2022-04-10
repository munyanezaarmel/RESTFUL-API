let mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
    title:String,
    description:String,
    img:{
        width:String,
        length:String
    }
    
  
})
module.exports=mongoose.model('blogs',blogSchema)