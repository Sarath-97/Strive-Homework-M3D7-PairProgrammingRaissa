console.log("hello")
    // window.onload = ()=> {
    //   fetchingUser()
    // }


      

    const fetchingUsers = async()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users ")
    let users = await response.json()
      console.log(users)
      let containerFluid = document.querySelector(".container-fluid")
     
      let container = document.querySelector(".container")
     
      users.forEach((user) => {  
        container.innerHTML += `<div class="card">
        <div class="card-body">
          <p class = "card-title">${user.name}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>`

      

      })
      let username = document.querySelector("#username")
      let options = document.querySelector("#users")
      let optionForEmail = document.querySelector("#mail")
      users.forEach((user) => {
      options.innerHTML += `
                 <option >${user.name}</option>`
                
        optionForEmail.innerHTML += `
                  <option >${user.email}</option>`

      username.innerHTML += `
                  <option>${user.username}</option>`
                       
      } )
       
    }
    
    fetchingUsers()