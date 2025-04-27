const product= require('../models/product.model');
//create a product
const createProduct= async(req, res)=> {
    try {
         const newProduct = await product.create(req.body);
         res.status(200).json(newProduct);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

//retrive all the products
const getProducts = async(req, res)=>{
    try{
        const newProduct= await product.find({});
        res.status(200).json(newProduct);
    
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
}
//retrive a single product
const getProduct = async(req,res)=>{
    try{
        const{id} = req.params;
        const newProduct= await product.findById(id);
        res.status(200).json(newProduct);
    
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
}
//update the product
const updatedProduct = async(req,res)=>{
    try{
        const{id} = req.params;
        const newProduct= await product.findByIdAndUpdate(id,req.body);
        if(!newProduct){
          return res.status(404).json({message: 'Product not found'});
        }
        const updatedProduct = await product.findById(id);
        res.status(200).json(updatedProduct);
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
}
//delete the product
const deleteProduct = async(req,res)=>{
    try{
        const{id} = req.params;
        const newProduct = await product.findByIdAndDelete(id);
        if(!newProduct){
          return res.status(404).json({message: 'Product not found'});
        }
        return res.status(200).json({message: "Product deleted successfully"})
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
}
module.exports={
    createProduct,
    getProducts,
    getProduct,
    updatedProduct,
    deleteProduct
}