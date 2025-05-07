import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { AUTH_URLS, ROOT_URLS } from '~core/constants/urls.constants';
import { emailValidator } from '~core/validators/email.validator';
import { passwordValidator } from '~core/validators/password.validator';
import type {
  LogInFormGroup,
  LogInFormState,
} from '~features/auth/pages/log-in/log-in-form.types';
import { API_ERROR_CODES } from '~core/constants/api-error-codes.constants';
import type { ApiErrorResponse } from '~core/types/api-response.types';

@Component({
  selector: 'app-log-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LogInComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  readonly authUrls = AUTH_URLS;
  readonly logInForm = this.createLoginForm();
  readonly formControls = {
    email: this.logInForm.get('email') as FormControl<string>,
    password: this.logInForm.get('password') as FormControl<string>,
  };
  readonly formState = signal<LogInFormState>({
    isLoading: false,
    isSubmitted: false,
  });

  constructor(private router: Router) {}

  sendForm(): void {
    this.updateFormState({ isSubmitted: true });

    this.router.navigate(['/sales']);

    if (this.logInForm.invalid) {
      this.logInForm.markAllAsTouched();
      return;
    }
    this.updateFormState({ isLoading: true });
    // this.authService
    // .logIn(this.logInForm.getRawValue())
    // .pipe(
    //   takeUntilDestroyed(this.destroyRef),
    //   finalize(() => {
    //     this.updateFormState({ isLoading: false });
    //   }),
    //   catchError((error: ApiErrorResponse) => {
    //     this.handleLoginError(error);
    //     return EMPTY;
    //   }),
    // )
    // .subscribe({
    //   next: (user: User) => {
    //     this.languageService.navigateWithUserLanguage(user.language, ROOT_URLS.myPokedex);
    //   },
    // });

    this.updateFormState({ isLoading: false });
  }

  private createLoginForm(): LogInFormGroup {
    return this.formBuilder.group({
      email: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          emailValidator(),
        ],
        nonNullable: true,
      }),
      password: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          passwordValidator(),
        ],
        nonNullable: true,
      }),
    });
  }

  private handleLoginError(response: ApiErrorResponse): void {
    const errorMessage =
      response.error.internalCode === API_ERROR_CODES.INVALID_CREDENTIALS_CODE
        ? 'Las credenciales no son correctas'
        : 'Oops, ha ocurrido algo inesperado';

    // this.alertStore.createErrorAlert(errorMessage);
    console.error(errorMessage);
  }

  private updateFormState(updates: Partial<LogInFormState>): void {
    this.formState.update((state) => ({ ...state, ...updates }));
  }
}
