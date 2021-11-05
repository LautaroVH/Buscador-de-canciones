import * as UI from './interfaz.js';

class API {
    constructor (artist, song) {
        this.artist = artist;
        this.song = song;
    }

    APIConsult() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        fetch(url)
        .then (answer => answer.json())
        .then (result => {

            if(result.lyrics) {
            const { lyrics } = result;

            UI.resultDiv.textContent = lyrics;
            UI.headingResult.textContent = `Song lyrics: ${this.song} by ${this.artist}`;
        }else{
            UI.messagesDiv.textContent = "Song doesn't exist";
            UI.messagesDiv.classList.add("error");

            setTimeout(() => {
                UI.messagesDiv.textContent = "";
                UI.messagesDiv.classList.remove("error");
    
            }, 3000);
        }
        
    })
    }
}

export default API;