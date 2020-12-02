// Add your code here
function submitData(userName,userEmail){
  

return fetch("http://localhost:3000/users",
  {method:"POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name:userName,
    email:userEmail
      })})

.then(function(response) {
    return response.json();
  })
.then(function(object){
  let p=document.createElement("p");
  let a=object.id
  p.innerHTML=a;
  document.body.appendChild(p);
})
  .catch(function(error)
  {
    let p=document.createElement("p");
  let a=error.message;
  p.innerHTML=a;
  document.body.appendChild(p);
  })
}

