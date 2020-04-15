import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DirectoryComponent } from './directory.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should increase page count when NEXT is clicked', function() {
    component.onNextClick();
    fixture.detectChanges();
    expect(component.pageCounter).toEqual(2); 
  });

  // it('should decrease page count when PREV is clicked', () => {
  //   component.onPrevClick();
  //   fixture.detectChanges();
  //   expect(component.onPrevClick)
  // });
});
