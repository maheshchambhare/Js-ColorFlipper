const btnAction = document.querySelector('.btn')

let counter = 1 ;

btnAction.addEventListener('click', () => {

    console.log('hello');
    if (document.body.style.backgroundColor === "red") {
    document.body.style.backgroundColor = "#131313"
    }
    else{
        document.body.style.backgroundColor = "red"
    }
    
})


