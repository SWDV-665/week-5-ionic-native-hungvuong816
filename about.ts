import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Photo } from '../contact/photo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  image : any;
  hinhs = [];
  photos = [new Photo('http://placehold.it/350/150',5),new Photo('http://placehold.it/350/150',5)]; 
  constructor(public navCtrl: NavController, private camera: Camera) {
  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.image = 'data:image/jpeg;base64,' + imageData;
     this.hinhs.push(this.image);
    }, (err) => {
     // Handle error
    });
    //this.photos.push(new Photo(this.image,3));//
    /* this.photos.push(new Photo(this.image,0)); 
    this.photos.push(new Photo('http://placehold.it/350/150',3));
    console.log("this is",this.photos);
    console.log("that is",this.photos.length); */
  }

  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.hinhs.push(this.image);
      
    }, (err) => {
     // Handle error
    });
    console.log("length cua hinh la",this.hinhs.length);
  }

  cropPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 400,
      targetHeight: 400 
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.photos.push(new Photo('data:image/jpeg;base64,' + imageData,0));
    }, (err) => {
     // Handle error
    });
  }

  
 // deletePhoto(){
  //  this.photo.splice(this.photos.indexOf(photo),1);
  //}

    //likePhoto(){
     // photo.likes++;
    //}
  





}
