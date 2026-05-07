const project_message = document.querySelector(".project-message");

window.addEventListener('mousemove', (e) => {
    project_message.style.left = e.pageX + 'px';
    project_message.style.top = e.pageY + 'px';
});
