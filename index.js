 
const user = document.getElementById("user");
const work = document.getElementById("work");
//some function
function using() {
    const username = prompt("what is your goood name");
    const workload = prompt("what do you do");
    const forStudents = "how can I help you as a tutor";
    const intro = "I am a ai image tutor ui";
    if (workload = "student") {
        work.innerText = forStudents;
        console.log(intro);
    }else {
        work.innerText = intro;
    };
    user.innerText = username;
};

using();

const image = document.getElementsByClassName("img")[0];
console.log(image);








