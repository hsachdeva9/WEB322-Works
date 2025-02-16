/******************************************************************************** 
*  WEB322 – Assignment 03
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Hitesh Sachdeva Student ID: 111287231  Date:
* 
********************************************************************************/ 

const projectData = require("./modules/projects");
const path = require('path');

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

projectData.initialize()
.catch((message)=>{
    console.log(message)
})

app.get('/', (req, res) => res.sendFile(path.join(__dirname,"/views/home.html")));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname,"/views/about.html")));

app.get('/solutions/projects', (req, res) => {
  
  const sector = req.query.sector;

  if (sector)
  {
    projectData.getProjectsBySector(sector)
    .then((data)=> res.send(data))
    .catch((message)=> res.status(404).send(message))
    
  }
  else 
  {
    projectData.getAllProjects()
    .then((data)=> res.send(data))
    .catch((message)=> res.status(404).send(message))
    
  }
})

app.get('/solutions/projects/:id', (req, res) => {
  
  const idDemo = req.params.id;
  projectData.getProjectById(idDemo)
  .then((data)=> res.send(data))
  .catch((message)=> res.status(404).send(message))
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"/views/404.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
