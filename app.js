import * as UI from"./interfaz.js";

import API from './api.js';

UI.searchForm.addEventListener ("submit", songSearch);

function songSearch(e){
    e.preventDefault();

    //obtain data from form
    const artist = document.querySelector("#artist").value;
    const song = document.querySelector("#song").value;
    if(artist === "" || song === "") {
        //User left an empty space, show error
        UI.messagesDiv.textContent= "Error, form must be completed";
        UI.messagesDiv.classList.add("error");

        setTimeout(() => {
            UI.messagesDiv.textContent = "";
            UI.messagesDiv.classList.remove("error");
        }, 3000);

        return;
    }

    //API consult

    const search = new API(artist, song)
    search.APIConsult();
}

