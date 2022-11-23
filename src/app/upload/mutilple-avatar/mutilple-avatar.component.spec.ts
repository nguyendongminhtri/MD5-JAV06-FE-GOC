import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutilpleAvatarComponent } from './mutilple-avatar.component';

describe('MutilpleAvatarComponent', () => {
  let component: MutilpleAvatarComponent;
  let fixture: ComponentFixture<MutilpleAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutilpleAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutilpleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
