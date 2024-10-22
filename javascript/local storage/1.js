let click = document.getElementById("click");
const username = document.getElementById("username");
click.addEventListener('click',() => {
    const value = username.value;
    localStorage.setItem('name',value);
});
const heading = document.getElementById('hello');
window.addEventListener('load',() => {
    const value = localStorage.getItem('name');
    heading.innerText = value;
});