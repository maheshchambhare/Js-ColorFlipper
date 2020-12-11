const colors = ["red","green","blue","#fff","#131313"]

const btnAction = document.getElementById("btn")


btnAction.addEventListener("click", () => {

    const random = getrandom();
    document.body.style.backgroundColor = colors[random];

});

function getrandom() {
    return Math.floor(Math.random()*colors.length);
};