const peopleArray = [
    {
      name: 'John Doe',
      img: 'john.jpg',
      age: 30,
      jobPosition: 'Software Engineer'
    },
    {
      name: 'Jane Smith',
      img: 'jane.jpg',
      age: 28,
      jobPosition: 'Graphic Designer'
    },
    {
      name: 'Bob Johnson',
      img: 'bob.jpg',
      age: 35,
      jobPosition: 'Data Analyst'
    },
    {
      name: 'Alice Brown',
      img: 'alice.jpg',
      age: 25,
      jobPosition: 'Marketing Specialist'
    },
    {
      name: 'Charlie White',
      img: 'charlie.jpg',
      age: 40,
      jobPosition: 'Project Manager'
    },
    {
      name: 'Eva Green',
      img: 'eva.jpg',
      age: 33,
      jobPosition: 'Sales Representative'
    },
    {
      name: 'David Black',
      img: 'david.jpg',
      age: 28,
      jobPosition: 'UX/UI Designer'
    },
    {
      name: 'Olivia Taylor',
      img: 'olivia.jpg',
      age: 31,
      jobPosition: 'Financial Analyst'
    },
    {
      name: 'Michael Wilson',
      img: 'michael.jpg',
      age: 45,
      jobPosition: 'HR Manager'
    }
  ];
  const main_div=document.querySelector("#main_div")
  let arr=[]
  
  peopleArray.map(el=>{
     let per_name = el.name
     let per_age= el.age
     let per_job_p=el.jobPosition
     let div_el=`
     <div class="card col-3 m-3">
     <img class="card-img-top" src="загружено.png" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${per_name}</h5>
       <p class="card-text">${per_job_p}</p>
       <p class="card-text"><small class="text-muted">age:${per_age}</small></p>
     </div>
   </div>`
   arr.push(div_el)
  })
  arr2=arr.join(" ")
  main_div.innerHTML=arr2
  console.log(arr2);