import {Component, OnInit} from '@angular/core';
import {ChangeAvatar} from '../../model/ChangeAvatar';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {
  singeAvatar: ChangeAvatar;
  checkUpload = false;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  changeAvatar($event: string) {
      this.singeAvatar = new ChangeAvatar($event);
      this.authService.updateAvatar(this.singeAvatar).subscribe(data =>{
        if(data.message==='yes'){
          this.checkUpload = true;
          this.tokenService.setAvatar($event);
          this.dialog.open(DialogComponent);
          // location.reload()
        }
      })
  }
}
