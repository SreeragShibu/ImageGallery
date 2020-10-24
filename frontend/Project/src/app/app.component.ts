import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Image } from './classes/images';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  constructor( private _freeApiService: freeApiService){
  } 
  images : Image[];

  ngOnInit(){
    this._freeApiService.getimages()
    .subscribe(
      data=>
      {
        this.images = data;
      }
    );
  }
}
