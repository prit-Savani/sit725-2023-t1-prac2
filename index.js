const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'public'});
})


app.get('/add', (req, res) => {
    const no1 = parseInt(req.query.num1);
    console.log(no1)
    const no2 = parseInt(req.query.num2);
    console.log(no2)
    const sum = no1 + no2;
    console.log(req)
    res.send(`The sum of ${no1} and ${no2} is ${sum} <input type="button" value="return" onclick="location.href='/'">`);

  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
