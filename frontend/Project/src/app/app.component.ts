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
  description : string;
  image: File;
  images : Image[];

  constructor( private http:HttpClient, private _freeApiService: freeApiService){}

  onNameChanged(event: any){
    this.name = event.target.value;

  }
  onImageChanged(event:any){
    this.image = event.target.files[0];
  }

  onDescriptionChanged(event:any){
    this.description = event.target.value;
  }

  newBook(){
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    uploadData.append('description', this.description);
    uploadData.append('image',this.image, this.image.name);
    this.http.post('http://127.0.0.1:8000/images/', uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
  

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
