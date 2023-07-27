import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageTplComponent } from './default-page-tpl.component';

describe('DefaultPageTplComponent', () => {
  let component: DefaultPageTplComponent;
  let fixture: ComponentFixture<DefaultPageTplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: []
    });
    fixture = TestBed.createComponent(DefaultPageTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
