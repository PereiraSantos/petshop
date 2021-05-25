import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhoComponent } from './banho.component';

describe('BanhoComponent', () => {
  let component: BanhoComponent;
  let fixture: ComponentFixture<BanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
