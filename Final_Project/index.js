const { validateName, validateEmail, checkPassword } = require("./validations");

const express = require("express");
// const app = express.Router();
const app = express();
const mongoose = require("mongoose");
bcrypt = require("bcrypt"),
  bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;

const saltRounds = 10;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running");
});
// mongodb://user:pass@192.168.176.1:27017/dbname

//configure mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Assignment8",
  {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDb sucessfully");
    }
  }
);
//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  joined: { type: Date, default: Date.now },
});
//////////////////////////////////////////////////////////////////////////
//product schema

const productSchema = new mongoose.Schema({
	name: String,
	Address: String,
	description: String,
  city: String,
  image: String,
  description2: String
})

const Product = mongoose.model("product", productSchema);
///////////////////////////////////////////////////////////////////////
const User = mongoose.model("user", userSchema);
app.get("/", (req, res) => {
  res.send("Welcome to Web Design Assignment 8");
});

// Create new user POST
app.post("/user/create", async (req, res) => {
  try {

    let user = await User.findOne({ email: req.body.email });
    let nameBool, passBool, emailBool = false;

    if (user) {
      res.status(400).send({ message: "Email Address already exists." });
    } else {
      if (validateName(req.body.name)) {
        nameBool = true;
      } else {
        nameBool = false;
        res.status(400).send({ message: "Please Enter Proper Name" })
      }

      if (validateEmail(req.body.email)) {
        // console.log("Proper email address");
        emailBool = true;
      } else {
        emailBool = false;
        res.status(400).send({ message: "Please enter correct email address" });
      }

      if (checkPassword(req.body.password)) {
        passBool = true;
        // console.log("Password is correct");
      } else {
        passBool = false;
        res.status(400).send({ message: "Please enter a strong password, It should contain 1 samll,1 capital, 1 digit and 1 special character in it" });
      }

      if (nameBool && passBool && emailBool) {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const innerResult = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          user_type: req.body.user_type
        });
        res.status(201).send(innerResult);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error Occurred!" });
  }

})

//create product

app.post("/product/create", async (req, res) => {

  let product = await Product.findOne({ name: req.body.name });

  if (product) {
    res.status(400).send({ message: "Property already exists." });
    } else {
      const product = await Product.create({
        name: req.body.name,
        Address: req.body.Address,
        description: req.body.description,
        city: req.body.city,
        image: req.body.image,
        description2: req.body.description2
      
      })
      res.status(200).send({message: "Property created succesfully"});
  }


})

// Update user details PUT
app.put("/user/edit", async (req, res) => {

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (passCompare) {

      if (req.body.new_name != undefined && req.body.new_password != undefined) {
        res.status(400).send({ message: "Please provide either new name or new password parameters only!" });
      } else if (req.body.new_name != undefined && req.body.new_password == undefined) {
        // console.log("Update new name");
        if (validateName(req.body.new_name)) {
          // console.log("Seems good");
          User.findByIdAndUpdate(user._id, { name: req.body.new_name }, { useFindAndModify: false })
            .then(data => {
              if (!data) {
                res.status(404).send({
                  message: `Cannot update email with user id=${user._id}. User was not found!`
                });
              } else {
                res.send({ message: "Name was updated successfully." })
              };
            })
            .catch(err => {
              res.status(500).send({
                message: "Error updating User's email with id=" + user._id
              });
            });
        } else {
          res.status(400).send({ message: "Please enter the new Name correctly!" });
        }
      } else if (req.body.new_name == undefined && req.body.new_password != undefined) {
        // console.log("Update new password");
        if (checkPassword(req.body.new_password)) {
          const newPassword = await bcrypt.hash(req.body.new_password, saltRounds);
          User.findByIdAndUpdate(user._id, { password: newPassword }, { useFindAndModify: false })
            .then(data => {
              if (!data) {
                res.status(404).send({
                  message: `Cannot update password with user id=${user._id}. User was not found!`
                });
              } else res.send({ message: "User password was updated successfully." });
            })
            .catch(err => {
              res.status(500).send({
                message: "Error updating User's password with id=" + user._id
              });
            });
        } else {
          res.status(400).send({ message: "Please enter password correctly!" });
        }
      } else {
        res.status(400).send({ message: "Please provide either the new name or new password, Cannot update email!" });
      }
    } else {
      res.status(404).send({
        message: `Password incorrect entered, please retry.`
      });
    }
  } else {
    res.status(404).send({
      message: `User was not found! Please check the email address.`
    });
  }
});


//Update product

app.post("/product/update", async (req, res) => {
  const product = await Product.findOne({ name: req.body.name });
  
  if(product) {
    var newproduct = await Product.updateOne({name:product.name}, { name: req.body.new_name }, {new: true})
    return res.status(200).json("Property updated successfully")
  }
  else{
    return res.status(400).json("Property not found")
  }

})


// Delete user
app.delete("/user/delete", async (req, res) => {

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    User.findByIdAndDelete(user._id)
      .then(item => {
        if (!item) {
          res.status(404).send({
            message: `Cannot delete User with email=${user.email}. User not found!`
          });
        } else {
          res.send({
            message: `User with email id ${user.email} was deleted successfully!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with email=" + user.email
        });
      });
  } else {
    res.status(404).send({
      message: `Email ID does not exist`
    });
  }
});


//delete product

app.delete("/product/delete", async (req, res) => {

  const product = await Product.findOne({name: req.body.name, city: req.body.city});

  if(product) {
    Product.findByIdAndDelete(product._id)
      .then(item => {
        if (!item) {
          res.status(404).send({
            message: `Cannot delete product with ${product.name}. product not found!`
          });
        } else {
          res.send({
            message: `product with name ${product.name} was deleted successfully!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product with name" + product.name
        });
      });
  }
  else{
    res.status(404).send({
      message: `Product name does not exist`
  });

}
});

// Get all users
app.get("/user/getAll", async (req, res) => {

  User.find({}, function (err, users) {
    users.forEach(user => delete user.password);
    const newResult = users.map(item => {
      return {
        id: item._id,
        name: item.name,
        email: item.email,
        password: item.password
      }
    })
    res.send(newResult);
  });

});

//Register

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);


  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "registration Success" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//fetch products

app.get('/fetch_property', async function(req, res){
  /* 
  1. query - area name
  2. take query and filter in the database using this area name
  3. respond with this array
  */
  var city = req.query.city
  // var name = req.query.name
  console.log(req.query, typeof city)
  
  // if (typeof city == "string" || typeof name == "string"){
  if (typeof city == "string"){
    var products = await Product.find({city: city})
    // var products = await Product.find({name: name})    
    
    return res.status(200).json({ msg: "Success", status:"ok", products: products})

  }
  else{
    return res.status(400).json({ msg: "Enter a valid city or name", status:'error' })
  }
})

//fetch specific property

app.get('/fetch_specificproperty', async function(req, res){
  var name = req.query.name
  
})





///Login page

app.post("/user/login", async (req, res) => {
  
  const email = req.body.email
  const password = req.body.password

  //find user exist or not
  User.findOne({ email })
      .then(user => {
          //if user not exist than return status 400
          if (!user) return res.status(400).json({ msg: "User does not exist" })

          //if user exist than compare password
          //password comes from the user
          //user.password comes from the database
          bcrypt.compare(password, user.password, (err, data) => {
              //if error than throw error
              if (err) throw err

              //if both match 
              if (data) {
                  return res.status(200).json({ msg: "Login success", status:'ok' })
              } else {
                  return res.status(401).json({ msg: "Invalid credentials!", status:'not ok' })
              }

          })

      })

})



module.exports = app;