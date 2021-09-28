import { Injectable } from '@angular/core';


export class PlayersService {

    constructor() { }
    
    players = [
        {name:'Kristin Sampson',      type:'free',  lvl:36},
        {name:'Alejandro Singleton',  type:'vip',   lvl:29},
        {name:'Lolita Blake',         type:'free',  lvl:38},
        {name:'Salvatore Dorsey',     type:'free',  lvl:36},
        {name:'Freddy Hayes',         type:'free',  lvl:35},
        {name:'Kermit Kaiser',        type:'vip',   lvl:25},
        {name:'Sabrina Rollins',      type:'free',  lvl:34},
        {name:'Marsha Krause',        type:'vip',   lvl:33},
        {name:'Luther Daniel',        type:'free',  lvl:22},
        {name:'Elvira Caldwell',      type:'vip',   lvl:31},
    ];

    getPlayers() {
        return this.players;
    }
}
