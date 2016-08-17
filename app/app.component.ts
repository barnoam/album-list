import {Component} from '@angular/core';
import {AlbumType}  from './models/AlbumType';
import {AlbumList} from "./component/AlbumList";

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app-component.html',
  directives: [AlbumList]
})
export class AppComponent {
  public userName: string;
  public albums: AlbumType[] = [];
  public name:string;
  constructor() {
    this.name = 'rotem';
    this.userName = 'Noam';
    this.albums.push(
      new AlbumType('NEW'),
      new AlbumType('OLD'),
      new AlbumType('POP'),
    );

  }

}
