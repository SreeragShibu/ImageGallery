import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Image } from './classes/images';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string;
  image: File;

  // constructor( private _freeApiService: freeApiService){
  // } 
  images : Image[];

  constructor( private http:HttpClient){}
  onNameChanged(event: any){
    this.name = event.target.value;

  }
  onImageChanged(event:any){
    this.image = event.target.files[0];
  }

  newBook(){
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    uploadData.append('image',this.image, this.image.name);
    this.http.post('http://127.0.0.1:8000/images/', uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  // ngOnInit(){
  //   this._freeApiService.getimages()
  //   .subscribe(
  //     data=>
  //     {
  //       this.images = data;
  //     }
  //   );
  // }
}
