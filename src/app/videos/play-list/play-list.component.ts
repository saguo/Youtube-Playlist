import { Component, OnInit, Input } from '@angular/core';
import { AppState } from "../../shared/app-state.service";




@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  

  constructor(private appState: AppState) {

   }

  clickToPlay(index:number){
    this.appState.activeVideo = this.appState.playList[index];
   }

  addList(){


  }

  removeFromList(index:number){
  	this.appState.playList.splice(index,1);

  }

  ngOnInit() {
  }

}