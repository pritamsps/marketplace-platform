const mongoose=require('mongoose');
const productschema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numberOfReviews: String,
    createdAt: Date

});
const productModel=mongoose.model("Product",productschema);
module.exports=productModel;
