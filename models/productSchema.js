///import mongoose

const mongoose= require('mongoose')
const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        

    },
    price:{
        type:Number,
        required:true,
        

    },
    description:{
        type:String,
        required:true,
        

    },
    amount:{
        type:Number,
        required:true,
        

    },
    image:{
        type:String,
        required:true,
        

    },
    rating:{
        rate:{
            type:Number,
            required:true,
            
        },
      count:{
        type:Number,
        required:true
      }

    }
})

//create a model to store products

const products= new mongoose.model('products',productSchema)

//export the model

module.exports=products