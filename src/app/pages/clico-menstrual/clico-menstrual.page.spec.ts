import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClicoMenstrualPage } from './clico-menstrual.page';

describe('ClicoMenstrualPage', () => {
  let component: ClicoMenstrualPage;
  let fixture: ComponentFixture<ClicoMenstrualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicoMenstrualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClicoMenstrualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
