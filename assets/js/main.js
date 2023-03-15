'use strict';

// Descrizione:
// Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus
// oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa).

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoAdd: "",
            toDoList: [
                {
                    text: "Andare un palestra",
                    done: "",
                },
                {
                    text: "Ritirare un pacco",
                    done: "",
                },
                {
                    text: "Visita dal dentista",
                    done: "",
                }
            ]
        }
    },
    methods: {

        addToDoList() {
            if (this.toDoAdd.trim().toLowerCase() !== "" ) {
                this.toDoList.push({text: this.toDoAdd, done: ""});
                this.toDoAdd = "";
            }
        },

        cancelList(element) {
            this.toDoList.splice(element, 1)
        },

        crossDone(element) {
            if (element.done === "" || element.done === false) {
                element.done = true;
            } else {
                element.done = false
            }

            console.log(element.done)
        }


    }
}).mount("#app")