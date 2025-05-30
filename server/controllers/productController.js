import Product from '../models/productModel.js';



const getProducts = async(req,res) => {
    try {
        const products = await Product.find();
        //console.log("products:",products);
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error});
    }

}

const getOneProduct = async(req, res) => {
    try {
        const id = req.params.id;
        if(id){
            const product = await Product.findById(id);
            // console.log("1 product: ",product);
            res.status(200).json({ product })
        } else {
            res.status(400).json({message: "Please provide id"})
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error});
    }
}
  
export { getProducts, getOneProduct }