
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
  
const validate = (req,res,next)=>{
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const DOB = req.body.DOB;

  const notProvided = [...Object.keys(req.body)].filter((key) => req.body[key] === '');
  if(notProvided.length > 0){
    return res.json({msg: 'provide all fields', notProvided: notProvided});
  }

  const phoneNumRegex = /^\d{10}$/;
  const emailregex = /^\w+\d*@\w+\.\w{2,3}$/;
  if (!name) { 
    return res.send('Name filed is empty');
  }
   if (!phoneNumRegex.test(phonenumber)) {
    return res.send('Give proper phonenumber')
   }

   if(!emailregex.test(email)){
    return res.send('give proper email')
   }

   next();
}

app.use('/registeruser', validate)

app.post("/registeruser", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const DOB = req.body.DOB;

  //   if (!name || !phonenumber ) {
  //     return res.send('Give proper Details');
  // }

 
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