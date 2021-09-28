import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(service: PlayersService) {
    this.players = service.getPlayers();
  }

  ngOnInit(): void {
  }

  title = 'List of Players'
  filter = 'all'
  players:any;

  displayAll() {
    this.filter = 'all';
  }
  displayMale() {
    this.filter = 'male';
  }
  displayFemale() {
    this.filter = 'female';
  }
}
