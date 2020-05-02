const express = require('express'); //Import Express มาไว้ใช้
const app = express(); // สร้่าง Express App ขึ้นมา
const db = require('./models')
const studentRoutes = require("./routes/student")


app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// app.get('/hello', (req, res) => {
//   res.send("Hello world");
// })

// app.post('/hello', (req, res) => {
//   res.send("Hello world");
// })

// app.post('/add', (req, res) => {
//   const a = Number(req.body.a);
//   const b = Number(req.body.b);
//   // const result = Number( a + b);
  
//   res.send({result: a + b});
// })

app.use("/students", studentRoutes);


db.sequelize.sync().then(() => {

app.listen(8000, ()=> {
  console.log("Server is running on port 8000")
}) //เอา Express App ที่เราสร้างขึ้นมา ไปจัดการ Http request ที่ port 8000
});