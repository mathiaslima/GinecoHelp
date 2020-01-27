import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HigieneDoisPage } from './higiene-dois.page';

describe('HigieneDoisPage', () => {
  let component: HigieneDoisPage;
  let fixture: ComponentFixture<HigieneDoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigieneDoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HigieneDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
