import { TestBed } from '@angular/core/testing';
import { ProfesoresComponent } from './profesores.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersService } from '../../../../core/services/users.service';
import { MockProvider } from 'ng-mocks';


describe('ProfesorComponent', () => {
  let component: ProfesoresComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresComponent],
      imports: [SharedModule],
      providers: [MockProvider(UsersService)]
    });

    component = TestBed.createComponent(ProfesoresComponent).componentInstance;
  });

  it('El ProfesoresComponent debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });
  it("Las columnas de la tabla profesores debe mostrarse como(displayedColumns): 'id', 'fullName', 'phone', 'email', 'curso', 'disponible'", () => {
    expect(component.displayedColumns).toContain('id');
    expect(component.displayedColumns).toContain('fullName');
    expect(component.displayedColumns).toContain('phone');
    expect(component.displayedColumns).toContain('email');
    expect(component.displayedColumns).toContain('curso');
    expect(component.displayedColumns).toContain('disponible');
  })
});