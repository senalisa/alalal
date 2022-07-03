window.addEventListener('load', init);

let apiUrl = 'index.php';
let apiUrlUnsplash = 'https://source.unsplash.com/1600x900/?';

function init() {
    getMusea();
}

function getMusea() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Start)
        .catch(Error);
}

function Start(data) {
    //Maak variabele aan en get list by id  
    let getlist = document.getElementById('list');

    for (let musea of data) {
        let museum = document.createElement('div');
        museum.classList.add('food');
        museum.innerHTML = '<h1>' + musea.name + '<h1>';
        getlist.appendChild(museum);

        let makediv = document.createElement('div');
        museum.appendChild(makediv);
        let img = document.createElement('img');
        let url = apiUrlUnsplash + musea.name;
        img.src = url;
        makediv.appendChild(img);

        let fave = document.createElement('div');
        fave.classList.add('favourite');
        museum.appendChild(fave);

        let info  = document.createElement('div');
        info.classList.add('recipe');
        info.addEventListener('click', addItem);
        info.id = museum.id;
        info.innerHTML = "Meer Informatie";
        museum.appendChild(info);
    }

    if (typeof window.localStorage === "undefined") {
        console.error('Local Storage werkt niet in uw browsor');
        return;
    }

    museaFave();
}

function Error(data) {
    console.log(data)

}

function addItem(e) {
    let container = document.getElementById('details');

    let block = document.getElementById('java');

    if (block){
        container.removeChild(block);
    }

    let section = document.createElement('section');
    section.id = 'java';
    container.appendChild(section);

    let clickedMusea = e.target.id;
    let url = apiUrl +'?id=' + clickedMusea;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Verder)
        .catch(Error);
}

function Verder(data){
    let section = document.getElementById('java')
        section.innerHTML = '<h1>Recipe</h1>' + data.recipe + '<h1>Tags</h1>' + data.tags;
}

function museaFave() {
    let clickedMusea = document.getElementsByClassName('favourite');
    let museum = document.getElementsByClassName('food');

    for (let i = 0; i < museum.length; i++) {

        let addToFave = museum.item(i);
        let click = clickedMusea.item(i);

        if (localStorage.getItem(i) !== null) {
            let addedToFave = museum.item(i);
            addedToFave.classList.add('yellow');
        }

        click.addEventListener('click', function (){
            addToFave.classList.toggle('yellow');
            if (addToFave.classList.contains('yellow')){
                localStorage.setItem(i, i);
                click.innerHTML = "Verwijder uit Favorieten";
            }else{
                localStorage.removeItem(i);
                click.innerHTML = "Voeg toe aan Favorieten";
            }
        })

        if (addToFave.classList.contains('yellow')){
            click.innerHTML = "Verwijder uit Favorieten"
        }else{
            click.innerHTML = "Voeg toe aan Favorieten"
        }
    }
}



