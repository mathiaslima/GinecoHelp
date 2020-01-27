import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeVaginalPage } from './saude-vaginal.page';

describe('SaudeVaginalPage', () => {
  let component: SaudeVaginalPage;
  let fixture: ComponentFixture<SaudeVaginalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeVaginalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeVaginalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
