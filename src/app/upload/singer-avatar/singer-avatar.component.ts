import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'protractor';

@Component({
  selector: 'app-singer-avatar',
  templateUrl: './singer-avatar.component.html',
  styleUrls: ['./singer-avatar.component.scss']
})
export class SingerAvatarComponent implements OnInit {
  selectFile: File;
  fileInFireBase: AngularFireStorageReference;
  urlFile : string;
  checkUpload = false;
  @Output()
  urlFromFireBase = new EventEmitter<string>()
  constructor(private afService: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onChangeFile($event) {
    console.log('event ---> ', $event);
    this.selectFile = $event.target.files[0];
  }
  upLoad(){
    this.checkUpload = true;
    this.fileInFireBase = this.afService.ref(this.selectFile.name)
    this.fileInFireBase.put(this.selectFile).then(data =>{
      return data.ref.getDownloadURL(); //trả về 1 đường dẫn từ Firebase
    }).then(url =>{
      this.checkUpload = false;
      this.urlFile = url;
      this.urlFromFireBase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error =>{
      `Upload File Failed! ${error}`
    })
  }
}
