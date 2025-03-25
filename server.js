const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
  

const users = []

app.post("/register", async (req, res) => {
    try {
       const hashedPassword = await bcrypt.hash(req.body.password, 10)
       users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
       })
       res.redirect("/login")
    } catch (error)  {
        console.log(error);
      res.redirect("/register")
    }
})
// Routes
app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/login', (req, res) => {
    res.render("login.ejs")
})

app.get('/register', (req, res) => {
    res.render("register.ejs")
})
 
// End Routes
console.log(users);
app.listen(3000, () => {
    console.log('server is running on port 3000');
});

