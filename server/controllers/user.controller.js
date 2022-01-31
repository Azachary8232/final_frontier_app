const User = require("../models/user.model");


        // ******Create******

module.exports.createNewProduct = (req, res) => {
        Product.create(req.body)
                .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
                .catch(err => res.status(400).json(err));
        };


        // ******Retrieve******

module.exports.findAllProducts = (req, res) => {
        Product.find()
                .then(allProducts => res.json({ products: allProducts }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
};
        
module.exports.findOneSingleProduct = (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ Product: oneSingleProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

                

                // ******Update******
        
module.exports.updateExistingProduct = (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
                .then(updatedProduct => res.json({ product: updatedProduct }))
                .catch(err => res.status(400).json(err));
        };
        

                // ******Delete******
        
module.exports.deleteAnExistingProduct = (req, res) => {
        Product.deleteOne({ _id: req.params.id })
                .then(result => res.json({ result: result }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
        };


