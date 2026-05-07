const project_message = document.querySelector(".project-message");
const counter_elem = document.querySelector(".counter");
const title = document.querySelector("h1");

window.addEventListener('mousemove', e => {
    project_message.style.left = e.pageX + 'px';
    project_message.style.top = e.pageY + 'px';
});

let counter = 0;
window.addEventListener('click', e => {
    ++counter;
    counter_elem.textContent = counter;
    if(counter >= 50 && counter % 2 == 0){
        title.textContent = "why are you doing this?";
    }else{
        title.textContent = "boredprogrammingstudent's website";
    }
});
