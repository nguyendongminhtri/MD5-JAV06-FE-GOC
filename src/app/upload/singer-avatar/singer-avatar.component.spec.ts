import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerAvatarComponent } from './singer-avatar.component';

describe('SingerAvatarComponent', () => {
  let component: SingerAvatarComponent;
  let fixture: ComponentFixture<SingerAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingerAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
