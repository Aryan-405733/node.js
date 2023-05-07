
const express = require("express");
const data = require('./data.js');
  

const app = express();
 app.use(express.json())

const checkQuery = (req, res, next) => {
  const clg = req.query.college;
  if (!clg) {
    return res.json({msg: "Please provide college name."});
  }
  
  next();
}
  
// const validate = (req,res,next)=>{
//   const name = req.body.name;
//   const address = req.body.address;
//   const email = req.body.email;
//   const phonenumber = req.body.phonenumber;
//   const DOB = req.body.DOB;
   
//   if (!name) {
//     return res.send('Give proper name');
//   }
//    if (!phonenumber) {
//     return res.send('Give proper phonenumber')
//    }
// }

app.post("/registeruser",validate, (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const DOB = req.body.DOB;

    if (!name || !phonenumber ) {
      return res.send('Give proper Details');
  }

 
    return res.json({msg:"Login Sucess", name:name, address:address,email:email,phonenumber:phonenumber,DOB:DOB});
    
})

app.get('/search', checkQuery, (req, res) => {
  const clg = req.query.college;
  console.log(clg);
  const filteruser = data.filter((user)=>{
    return user.college===clg;
  })
  res.json(filteruser);
});


  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})