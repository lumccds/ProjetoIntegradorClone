import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarAparelhaComponent } from './doar-aparelha.component';

describe('DoarAparelhaComponent', () => {
  let component: DoarAparelhaComponent;
  let fixture: ComponentFixture<DoarAparelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoarAparelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoarAparelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
