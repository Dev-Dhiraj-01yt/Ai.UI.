
const user = document.getElementById("user");
const work = document.getElementById("work");
//some function
function using() {
    const username = prompt("what is your goood name");
    const workload = prompt("what do you do");
    const hug = "how can I help you as a tutor"
    user.innerText = username;
    
    if(workload == "student") {
        work.innerText = hug;
        console.log(hug);
    };
};
using();
const image = document.getElementsByClassName("img")[0];
console.log(image);


