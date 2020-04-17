import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Rick and Morty logo', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.img-container>img').src).toContain('https://bubbleblabber-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/RAM_LOGO_FINAL.jpg');
  }));
});
