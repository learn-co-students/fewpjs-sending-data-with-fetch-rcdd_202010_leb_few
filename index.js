// Add your code here
// Add your code here
function submitData(name1, email1){
  
  let configObj ={
  method : "POST",
  headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name : name1, 
    email : email1
    
  })
  
};
  return fetch ("http://localhost:3000/users",configObj)
  .then(res => res.json())
  .then(function(data){
    document.body.innerHTML=data["id"];
  })
  .catch(function(err){
   document.body.innerHTML=err.message
  })
  
}
