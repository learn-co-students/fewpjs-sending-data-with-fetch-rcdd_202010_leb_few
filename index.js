// Add your code here
let name=document.getElementById("userName").value;
let email=document.getElementById("userEmail").value;
let submit=document.getElementById("submit");


submit.addEventListener('click',submitData);

function submitData(name,email){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email
  })

})
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML=Object(object.id);
  })
    .catch(function(error) {
    document.body.innerHTML="Unauthorized Access";
  });

}








