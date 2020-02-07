import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDoisPage } from './saude-vaginal-dois.page';

describe('SaudeVaginalDoisPage', () => {
  let component: SaudeVaginalDoisPage;
  let fixture: ComponentFixture<SaudeVaginalDoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeVaginalDoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeVaginalDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
