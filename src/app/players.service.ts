import { Injectable } from '@angular/core';


export class PlayersService {

    constructor() { }
    
    players = [
        {name:'Kristin Sampson',      gender:'female',  age:36},
        {name:'Alejandro Singleton',  gender:'male',    age:29},
        {name:'Lolita Blake',         gender:'female',  age:38},
        {name:'Salvatore Dorsey',     gender:'male',    age:36},
        {name:'Freddy Hayes',         gender:'male',    age:35},
        {name:'Kermit Kaiser',        gender:'male',    age:25},
        {name:'Sabrina Rollins',      gender:'female',  age:34},
        {name:'Marsha Krause',        gender:'female',  age:33},
        {name:'Luther Daniel',        gender:'male',    age:22},
        {name:'Elvira Caldwell',      gender:'female',  age:31},
    ];

    getPlayers() {
        return this.players;
    }
}
