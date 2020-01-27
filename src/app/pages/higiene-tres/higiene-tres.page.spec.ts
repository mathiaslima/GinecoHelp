import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HigieneTresPage } from './higiene-tres.page';

describe('HigieneTresPage', () => {
  let component: HigieneTresPage;
  let fixture: ComponentFixture<HigieneTresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigieneTresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HigieneTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
