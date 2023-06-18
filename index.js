// Add your code here
const info = {
    name: 'haroon',
    age: '20'
}

const submitData = {
 method: "POST",
 Headers : {
    "Content-Type": "application/json",
    Accept: "application/json",
 },
 body:JSON.stringify(info),
};

fetch("http://localhost:3000/users",submitData)
.then(res => res.json())
.then(data => document.body.innerHTML = data["id"])
.catch(error => document.body.innerHTML = error.message );
