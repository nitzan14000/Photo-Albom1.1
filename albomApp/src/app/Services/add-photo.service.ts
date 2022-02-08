import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { upLoadPictureModel } from '../Models/upLoadPictureModel';
import { picturesFromData } from '../Models/picturesFromData';
import { Observable } from 'rxjs';
import { Categories } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class AddPhotoService {
  pictureFromLocalMachin: upLoadPictureModel;
  picture: picturesFromData;
  privateModeModel: boolean;
  categories:Categories[];
  allPhotos:picturesFromData[]
  constructor(private http: HttpClient) {}

  changeMode() {
    this.privateModeModel !== this.privateModeModel;
  }
  uploadToService(picture: any) {
    return this.http
      .post<any>('http://localhost:4000/savePicture', { image: picture })
      .subscribe((res) => {
        alert(res.message);
      });
  }

  uploadToClient(): Observable<picturesFromData[]> {
    return this.http.get<picturesFromData[]>(
      'http://localhost:4000/all-photos'
    );
  }

  editPicture(picture: picturesFromData) {
    return this.http
      .post<any>('http://localhost:4000/editPicture', { image: picture })
      .subscribe((res) => {
        alert(res.message);
      });
  }
  sendCategoriesToClient(): Observable<Categories[]> {
    return this.http.get<Categories[]>('http://localhost:4000/all-categories');
  }

  privateMode(password: string) {
    return this.http
      .post<any>('http://localhost:4000/privateMode', { password })
      .subscribe((res) => {
        this.privateModeModel = res.isTrue;
        alert(res.message);
      });
  }

  uploadPrivatePictures(): Observable<picturesFromData[]> {
    return this.http.get<picturesFromData[]>(
      'http://localhost:4000/all-private-photos'
    );
  }
  uploadUnPrivatePictures(): Observable<picturesFromData[]> {
    return this.http.get<picturesFromData[]>(
      'http://localhost:4000/all-unprivate-photos'
    );
  }

  addCategory(category:string):Observable<Categories[]>{
    return this.http.post<any>('http://localhost:4000/add-category',{category})
  }
  deleteCategory(category:string):Observable<Categories[]>{
    return this.http.post<any>('http://localhost:4000/delete-category',{category})
  }
}
