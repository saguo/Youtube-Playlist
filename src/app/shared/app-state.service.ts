import { Injectable } from "@angular/core";
import { Video } from "../videos/shared/video.model";


@Injectable()
export class AppState {

  videoList: Video[] = [];
  activeVideo: Video;
  //playList: Video[] = [];
  playLists: Video[][];
  playListsName: string[];

  constructor() {
  		this.playLists = [];

        //for(var i: number = 0; i < 20; i++) {
      this.playLists[0] = [];
          //  }
      this.playListsName = [];
      
      this.playListsName[0] = "Playlist 1 (default)";
    }


  }

