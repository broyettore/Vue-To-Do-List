'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoAdd: "",
            isShow: false,
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
        },

        showToggle() {
            this.isShow = !this.isShow
        },

    }
}).mount("#app")