import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'protractor';

@Component({
  selector: 'app-mutilple-avatar',
  templateUrl: './mutilple-avatar.component.html',
  styleUrls: ['./mutilple-avatar.component.scss']
})
export class MutilpleAvatarComponent implements OnInit {
  selectFile: File[];
  arrFileInFireBase: AngularFireStorageReference;
  arrUrlFromFireBase = [];
  checkUploadMultiple = false;
  @Output()
  arrUrl = new EventEmitter<string[]>();
  constructor(private afService: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadMultipleFile($event) {
    console.log('$event --->', $event);
    this.selectFile = $event.target.files;
  }
  upLoad(){
    this.checkUploadMultiple = true;
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrFileInFireBase = this.afService.ref(this.selectFile[i].name);
      this.arrFileInFireBase.put(this.selectFile[i]).then(data =>{
        return data.ref.getDownloadURL();
      }).then(url=>{
        console.log('URL --->', url);
        this.checkUploadMultiple = false;
        this.arrUrlFromFireBase.push(url);
        this.arrUrl.emit(this.arrUrlFromFireBase);
      }).catch(error =>{
        console.log(`Upload Failed! ${error}`);
      })
    }
    console.log('============================>', this.arrUrlFromFireBase);
  }
}
