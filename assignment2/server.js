/******************************************************************************** 
*  WEB322 – Assignment 02 
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Hitesh Sachdeva Student ID: 111287231  Date: 03/02/2025 
* 
********************************************************************************/ 

const projectData = require("./modules/projects");

const express = require('express')
const app = express()
const port = 3000

projectData.initialize()
.catch((message)=>{
    console.log(message)
})

app.get('/', (req, res) => res.send("Assignment 2:  Hitesh Sachdeva - 111287231"));

app.get('/solutions/projects', (req, res) => {
  
  projectData.getAllProjects()
 .then((data)=> res.send(data))
  .catch((message)=> res.send(message))
})

app.get('/solutions/projects/id-demo', (req, res) => {

  const projectID = 3;
  projectData.getProjectById(projectID)
  .then((data)=> res.send(data))
  .catch((message)=> res.send(message))
})

app.get('/solutions/projects/sector-demo', (req, res) => {
    const projectSector = 'ind';
    projectData.getProjectsBySector(projectSector)
  .then((data)=> res.send(data))
  .catch((message)=> res.send(message))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
