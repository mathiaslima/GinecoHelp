import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodoContraceptivoPage } from './metodo-contraceptivo.page';

describe('MetodoContraceptivoPage', () => {
  let component: MetodoContraceptivoPage;
  let fixture: ComponentFixture<MetodoContraceptivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoContraceptivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodoContraceptivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
