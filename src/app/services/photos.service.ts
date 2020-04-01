import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private val : string;
  constructor(
    private http:HttpClient
  ) { }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId){
    
    console.log("https://jsonplaceholder.typicode.com/photos?albumId="+albumId);
    return this.http.get("https://jsonplaceholder.typicode.com/photos?albumId="+albumId);
  }
}
