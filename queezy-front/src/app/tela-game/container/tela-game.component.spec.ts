import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGameComponent } from '../tela-game.component';

describe('TelaGameComponent', () => {
  let component: TelaGameComponent;
  let fixture: ComponentFixture<TelaGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaGameComponent]
    });
    fixture = TestBed.createComponent(TelaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
