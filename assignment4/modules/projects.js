const projectData = require("../data/projectData");
const sectorData = require("../data/sectorData");

let projects=[];

function initialize()
{
    return new Promise ((resolve, reject) => {
    try{
    projects = [...projectData];

    projects.forEach( (data)=>
    {
        sectorData.forEach((secData) =>
            {
                if( secData && secData.id === data.sector_id)
                {
                    data.sector = secData.sector_name;
                    
                }
            })
     })
     resolve();
    }
    catch(error){

        reject(`Failed to initialize data ${error}`);
    }

         
 })
}

function getAllProjects()
{
    return new Promise ((resolve, reject) =>
    {
     if(projects.length > 0)
     {
        resolve(projects);
     }

     else 
     {
        reject("Unable to get projects")
     }
    })
}


function getProjectById(projectId)
{
    return new Promise((resolve, reject) => {
     
        let data = projects.find((element)=>
        element.id == projectId)

        if (data)
        {
            resolve(data)
        }
        else 
        {
            reject(`Unable to find object by ID ${projectId}`)
        }

})
    

}

function getProjectsBySector(sector)
{
    return new Promise((resolve, reject) => {
     
   let data = projects.filter((data) =>
    data.sector.toLowerCase().includes(sector.toLowerCase()) )
   if (data.length> 0)
    {
        resolve(data)
    }
    else 
    {
        reject(`Unable to find object by sector ${sector}`)
    }
  })

}

module.exports = { initialize, getAllProjects, getProjectById, getProjectsBySector };

