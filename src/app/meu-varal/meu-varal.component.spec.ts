import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuVaralComponent } from './meu-varal.component';

describe('MeuVaralComponent', () => {
  let component: MeuVaralComponent;
  let fixture: ComponentFixture<MeuVaralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuVaralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuVaralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
