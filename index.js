/*
const user = document.getElementById("user");
const work = document.getElementById("work");
//some function
function using() {
    const username = prompt("what is your goood name");
    const workload = prompt("what do you do");
};

    const forStudents = "how can I help you as a tutor";
    const intro = "I am a ai image tutor ui";
    let nameArray = ["student","Student","STUDENT"];

    let logic;
    function ChalBeta () {
        if (workload == nameArray[0]) {
            logic = 1;
        }else if (workload == nameArray[1]) {
            logic = 1;
            
        }else if (workload == nameArray[2]) {
            logic = 1;
        }else {
            logic = 0;
        };
    }
    if (logic == 1) {
        work.innerText = forStudents;
        console.log(intro);
    }else {
        work.innerText = intro;
    };
    user.innerText = username;

// tunction call
using()
ChalBeta();

const image = document.getElementsByClassName("img")[0];
console.log(image);*/

const user = document.getElementById("user");
const work = document.getElementById("work");
function using() {
    const username = prompt("what is your good name");
    const workload = prompt("what do you do");
    const forStudents = "how can I help you as a tutor";
    const intro = "I am a ai image tutor ui";
    let nameArray = ["student","Student","STUDENT"];
    let logic;
    
    function ChalBeta() {
        if (workload == nameArray[0]) {
            logic = 1;
        } else if (workload == nameArray[1]) {
            logic = 1;
        } else if (workload == nameArray[2]) {
            logic = 1;
        } else {
            logic = 0;
        }
    }
    
    ChalBeta(); // Actually call the function!
    
    if (logic == 1) {
        work.innerText = forStudents;
        console.log(intro);
    } else {
        work.innerText = intro;
    }
    
    user.innerText = username;
}

using();

const image = document.getElementsByClassName("img")[0];
console.log(image);














