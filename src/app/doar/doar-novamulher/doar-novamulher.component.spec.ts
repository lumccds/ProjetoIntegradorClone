import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarNovamulherComponent } from './doar-novamulher.component';

describe('DoarNovamulherComponent', () => {
  let component: DoarNovamulherComponent;
  let fixture: ComponentFixture<DoarNovamulherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoarNovamulherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoarNovamulherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
