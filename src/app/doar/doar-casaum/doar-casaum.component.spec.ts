import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarCasaumComponent } from './doar-casaum.component';

describe('DoarCasaumComponent', () => {
  let component: DoarCasaumComponent;
  let fixture: ComponentFixture<DoarCasaumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoarCasaumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoarCasaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
