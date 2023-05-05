
const express = require("express");
  
// New app using express module
const app = express();
 app.use(express.json())
  
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.send('Give Proper Details');
    }

    return res.send('Login Success');


    
})
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})