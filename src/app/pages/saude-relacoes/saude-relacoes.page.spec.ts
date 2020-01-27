import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeRelacoesPage } from './saude-relacoes.page';

describe('SaudeRelacoesPage', () => {
  let component: SaudeRelacoesPage;
  let fixture: ComponentFixture<SaudeRelacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeRelacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeRelacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
