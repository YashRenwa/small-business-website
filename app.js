const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/anotherDB",{useNewUrlParser:true});

const mainSchema = {
    userName: String,
    password: String,
    shopname : String,
    carouselImages : [String],
    phone: Number,
    email: String,
    address: String,
    products: [
        {
            name: String,
            cardImgUrl: String,
            description: String,
            mrp: Number,
            brandName: String,
            price: Number,
            images: [String],
            inStock: Number,
            features: [String],
        }
    ]
};

const main = mongoose.model("Main", mainSchema);

const defaultMain = new main({
    userName: "admin",
    password: "admin",
    shopname : "Your Shop Name",
    carouselImages : [
        "https://images.unsplash.com/photo-1603270227428-3ea5d22b0dd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        "https://images.unsplash.com/photo-1512666369269-4442570b7146?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1514379050824-67a9da2afea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1519307021830-e30ce3fd781d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ""
    ],
    phone: 999999999,
    email: "youremail@gmail.com",
    address: "shop address will come here",
    products: [
        {
            name: "sample Product 1",
            description: "This is the description of sample product 1",
            mrp: 1000,
            brandName: "Brand",
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            price: 500,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 100,
            features: [
                "sample product1 1st feature",
                "sample product1 2nd feature",
                "sample product1 3rd feature",
                "sample product1 4th feature",
                "",
            ],
        },
        {
            name: "sample Product 2",
            description: "This is the description of sample product 2",
            mrp: 2000,
            brandName: "Brand",
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            price: 1000,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 200,
            features: [
                "sample products2 1st feature",
                "sample products2 2nd feature",
                "sample products2 3rd feature",
                "sample products2 4th feature",
                "",
            ],
        },
        {
            name: "sample Product 3",
            description: "This is the description of sample product 3",
            mrp: 2000,
            brandName: "Brand",
            price: 1000,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 200,
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            features: [
                "sample products3 1st feature",
                "sample products3 2nd feature",
                "sample products3 3rd feature",
                "sample products3 4th feature",
                "",
            
            ],
        },
        {
            name: "sample Product 4",
            description: "This is the description of sample product 4",
            mrp: 2000,
            brandName: "Brand",
            price: 1000,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 200,
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            features: [
                "sample products4 1st feature",
                "sample products4 4nd feature",
                "sample products4 3rd feature",
                "sample products4 4th feature",
                "",
            ],
        },
        {
            name: "sample Product 5",
            description: "This is the description of sample product 5",
            mrp: 2000,
            brandName: "Brand",
            price: 1000,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 200,
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            features: [
                "sample products5 1st feature",
                "sample products5 5nd feature",
                "sample products5 3rd feature",
                "sample products5 4th feature",
                "",
                
            ],
        },
        {
            name: "sample Product 6",
            description: "This is the description of sample product 6",
            mrp: 2000,
            brandName: "Brand",
            cardImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            price: 1000,
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                "",
                "",
            ],
            inStock: 200,
            features: [
                "sample products6 1st feature",
                "sample products6 2nd feature",
                "sample products6 3rd feature",
                "sample products6 4th feature",
                "",
            ],
        }
    ]
});

app.get("/", function(rea,res){
    main.find({}, function(err, foundItems){
        
        if(foundItems.length === 0){
            main.insertMany(defaultMain, (error) => {
                if(error){
                    console.log(error);
                }else{
                    console.log("Data added successfully");
                }
            });
            res.redirect("/");
        }else{
            res.render("index", {data: foundItems[0], response:res});
        }

    })
});

app.get("/product/:id", function(req,res){
    main.find({}, function(err, foundItems){
        res.render("product", {
            product: req.params.id !== undefined ? foundItems[0].products.filter(function(obj) {return obj.id== req.params.id}) : foundItems[0].products, data:foundItems[0]
        })
    })
    
})

app.post("/admin",function(req,res){
    const musername = req.body.username;
    const mpassword = req.body.password;
    const mname = req.body.name;
    const memail = req.body.email;
    const maddress = req.body.address;
    const mphone = req.body.phone;
    const mimgUrl1 = req.body.imgUrl1;
    const mimgUrl2 = req.body.imgUrl2;
    const mimgUrl3 = req.body.imgUrl3;
    const mimgUrl4 = req.body.imgUrl4;
    const mimgUrl5 = req.body.imgUrl5;
    const imgarr = [mimgUrl1, mimgUrl2, mimgUrl3, mimgUrl4, mimgUrl5];
    main.updateMany({}, {$set: {shopname:mname,phone:mphone,email:memail,address:maddress, userName:musername,password:mpassword,carouselImages:imgarr } },  function(err, res) {
        if (err) throw err;
        console.log("Data Updated");
      })

    res.redirect("/")
});

app.get("/admin",function(req,res){
    main.find({}, function(err,foundItems){
        if(err){
            console.log(err)
        }else{
            res.render("admin-page",{data:foundItems[0]});
        }
    })
    
})

app.post("/product_update/:id", function(req,res){
    const pname = req.body.val1;
    const pcardUrl = req.body.cardImg;
    const mimgUrl1 = req.body.imgUrl1;
    const mimgUrl2 = req.body.imgUrl2;
    const mimgUrl3 = req.body.imgUrl3;
    const mimgUrl4 = req.body.imgUrl4;
    const mimgUrl5 = req.body.imgUrl5;
    const pbrand = req.body.val2;
    const pprice = req.body.val3;
    const pmrp = req.body.val4;
    const pdescription = req.body.description;
    const pfeature1 = req.body.feature1;
    const pfeature2 = req.body.feature2;
    const pfeature3 = req.body.feature3;
    const pfeature4 = req.body.feature4;
    const pfeature5 = req.body.feature5;
    const featurearr = [pfeature1, pfeature2, pfeature3, pfeature4, pfeature5];
    const imgarr = [mimgUrl1, mimgUrl2, mimgUrl3, mimgUrl4, mimgUrl5]; 
    main.updateMany({'products._id':req.params.id}, {$set: {'products.$.name':pname,'products.$.cardImgUrl':pcardUrl,'products.$.images':imgarr,'products.$.description':pdescription,'products.$.mrp':pmrp,'products.$.price':pprice,'products.$.features':featurearr, } },  function(err, res) {
        if (err) throw err;
        console.log("Product Updated");
      })
      res.redirect("/admin");
})

app.get("/product_new",function(req,res){
    res.render("admin_product_new",{});
})

app.post("/product_new_update", function(req,res){
    const pname = req.body.val1;
    const pcardUrl = req.body.cardImg;
    const mimgUrl1 = req.body.imgUrl1;
    const mimgUrl2 = req.body.imgUrl2;
    const mimgUrl3 = req.body.imgUrl3;
    const mimgUrl4 = req.body.imgUrl4;
    const mimgUrl5 = req.body.imgUrl5;
    const pbrand = req.body.val2;
    const pprice = req.body.val3;
    const pmrp = req.body.val4;
    const pdescription = req.body.description;
    const pfeature1 = req.body.feature1;
    const pfeature2 = req.body.feature2;
    const pfeature3 = req.body.feature3;
    const pfeature4 = req.body.feature4;
    const pfeature5 = req.body.feature5;
    const featurearr = [pfeature1, pfeature2, pfeature3, pfeature4, pfeature5];
    const imgarr = [mimgUrl1, mimgUrl2, mimgUrl3, mimgUrl4, mimgUrl5];
    main.updateMany({}, {$push:{"products": {'name':pname,'cardImgUrl':pcardUrl,'images':imgarr,'description':pdescription,'mrp':pmrp,'price':pprice,'features':featurearr, } }}, {safe: true, upsert: true}, function(err, res) {
        if (err) throw err;
        console.log("New Product Added");
      })
      res.redirect("/admin");
});


app.get("/productchanges_admin/:id",function(req,res){
    main.find({}, function(err, foundItems){
        res.render("admin_product_changes", {
            product: req.params.id !== undefined ? foundItems[0].products.filter(function(obj) {return obj.id== req.params.id}) : foundItems[0].products
        })
    })
})

app.get("/productdelete_admin/:id",function(req,res){
    main.updateMany({},{$pull: {'products':{_id:req.params.id}}}, function(err, res) {
        if (err) throw err;
        console.log("Product Deleted");
      })
    res.redirect("/admin");
})

app.get("/products_admin",function(req,res){
    res.render("admin_product",{})
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
})
