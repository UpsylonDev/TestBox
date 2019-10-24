

if (window.XMLHttpRequest)    //  Objet standard
{
   xhr = new XMLHttpRequest();     //  Firefox, Safari, ...
}
else  if (window.ActiveXObject)      //  Internet Explorer
{
   xhr = new ActiveXObject("Microsoft.XMLHTTP");
}


// la div qui va contenir le texte injecté
let test = document.getElementById("test")

// le lien ou le bouton pour charger
let add = document.getElementById('btn')
let supress = document.getElementById('supr')

add.addEventListener('click', (e) => {
   e.preventDefault()
   xhr.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          
           test.innerHTML = this.response
       }
   }
   xhr.open("GET", "data.txt", true)
   xhr.responseType = "text"
   xhr.send()
})

supress.addEventListener('click', (e) => {
    test.innerHTML =""
})

// const tab = [
//     'Yann',
//     'Marcel',
//     'Julie',
//     'Pierre',
//     'Paul',
//     'Jaques'
// ]

// function remplir() {
//     for (let i = 0; i < tab.length; i++) {
//         test.innerHTML += tab[i] + "<br>"
//     }
    
// }

// add.addEventListener('click', remplir)