import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User } from '../../shared/models/interfaces';
import { AuthService } from './auth.service';

describe('Pruebas de AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //   providers: [
    //     MockProvider(AuthService)
    // ],
    providers: [AuthService],
      imports: [HttpClientTestingModule],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
    
  });

  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar login() debe establecer un authUser', () => {
    const MOCK_RESPONSE: User[] = [
      {
        id: "23",
        firstName: 'MOCKNAME',
        lastName: 'MOCKLASTNAME',
        email: 'mock@mail.com',
        password: 'password',
        role: 'ADMIN',
        token: 'ksdjakdasdsad',
        phone: 132135165,
        isActive: false,
        curso: 'ReactJS'
      },
    ];

    authService
      .login({ email: 'mock@mail.com', password: 'password' }).subscribe({
        next: (user) => {
          expect(authService.authUser).toEqual(MOCK_RESPONSE[0]);
        }
      })

    httpController
      .expectOne({
        url: 'http://localhost:3000/users?email=mock@mail.com&password=password',
        method: 'GET',
      })
      .flush(MOCK_RESPONSE);
  });
});