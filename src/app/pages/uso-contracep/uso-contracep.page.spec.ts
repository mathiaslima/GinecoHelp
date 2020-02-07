import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsoContracepPage } from './uso-contracep.page';

describe('UsoContracepPage', () => {
  let component: UsoContracepPage;
  let fixture: ComponentFixture<UsoContracepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoContracepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsoContracepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
