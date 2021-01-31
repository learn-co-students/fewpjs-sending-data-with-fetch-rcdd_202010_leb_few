let sub= document.getElementById("submit");
sub.addEventListener("submit", submitData);

console.log(sub)
;function submitData (name , email){
let formData = {
  name: name,
  email: email
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });
}