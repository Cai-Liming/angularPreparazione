import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseruserItemComponent } from './useruser-item.component';

describe('UseruserItemComponent', () => {
  let component: UseruserItemComponent;
  let fixture: ComponentFixture<UseruserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseruserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseruserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
