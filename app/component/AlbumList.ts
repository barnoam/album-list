import {Component, Input} from '@angular/core';
import {AlbumType}  from './../models/AlbumType';


@Component({
  selector: 'album-list',
  templateUrl: './app/templates/album-list.html'

})
export class AlbumList {
  @Input() public albums: AlbumType[];
  @Input() public name: string;

  constructor() {

  }
}
