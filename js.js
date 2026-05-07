const project_message = document.querySelector(".project-message");
const counter_elem = document.querySelector(".counter");
const title = document.querySelector("h1");
const body = document.querySelector("body");

window.addEventListener('mousemove', e => {
    project_message.style.left = e.pageX + 'px';
    project_message.style.top = e.pageY + 'px';
});

let counter = 0;
window.addEventListener('click', e => {
    ++counter;
    counter_elem.textContent = counter;
    if(counter >= 50 && counter % 2 == 0){
        if(counter >= 500){
            title.textContent = "touch grass";
        }
        else if(counter >= 100){
            title.textContent = "you have no life";
        }else{
            title.textContent = "why are you doing this?";
        }
    }else{
        title.textContent = "boredprogrammingstudent's website";
    }
    if(counter >= 1000){
        title.textContent = "there you go. light mode.";
        body.style.backgroundColor = "#ffffff";
        title.style.color = "#000000";
    }
});
