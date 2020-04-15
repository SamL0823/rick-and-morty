import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    // I dont think I understand how to write unit tests :( like, 
    // of course the pictures there?! I feel like this accomplishes nothing but I 
    // wrote it anyway
  it('should render Rick and Morty logo', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand>img').src).toContain('/assets/logo.png');
  }));

  it('should route to correct pages when links are clicked', async(() => {

  }))
});
