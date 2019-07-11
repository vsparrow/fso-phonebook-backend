const express = require('express')
const app = express();

const persons = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    },
    { 
      "name": "Maz Jabroni", 
      "number": "39-22-6457522",
      "id": 5
    }
  ]

app.get('/api/persons', (req,res)=>{
    res.json(persons)
})

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('Server listening on port ' + PORT)
})