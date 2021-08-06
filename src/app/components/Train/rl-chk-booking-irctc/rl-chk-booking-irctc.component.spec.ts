import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RLCHKBOOKINGIRCTCComponent } from './rl-chk-booking-irctc.component';

describe('RLCHKBOOKINGIRCTCComponent', () => {
  let component: RLCHKBOOKINGIRCTCComponent;
  let fixture: ComponentFixture<RLCHKBOOKINGIRCTCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RLCHKBOOKINGIRCTCComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RLCHKBOOKINGIRCTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
