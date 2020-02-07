import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsoAdolecentesPage } from './uso-adolecentes.page';

describe('UsoAdolecentesPage', () => {
  let component: UsoAdolecentesPage;
  let fixture: ComponentFixture<UsoAdolecentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoAdolecentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsoAdolecentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
