import {Component, computed, EventEmitter, Output, Signal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

/**
 * RegistrationComponent is a standalone Angular component that handles user registration.
 * It uses Angular's reactive signals to manage form state and validation.
 * The component emits events when a user registers or defers registration.
 * It includes methods to submit registration, defer registration, and clear form fields.
 * The component's template and styles are defined in separate files.
 * It ensures that the first and last names are at least 2 characters long before allowing submission.
 * This component is designed to be reusable and easily integrated into larger applications.
 * It provides a clean and user-friendly interface for user registration.
 */

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './developer-registration.component.html',
  styleUrl: './developer-registration.component.css'
})
export class RegistrationComponent {

  firstName= signal<string>('');
  lastName= signal<string>('');
  isFormValid: Signal<boolean> = computed(()=>
  this.firstName().trim().length >= 2 && this.lastName().trim().length >= 2);

  @Output() public developerRegistered =
    new EventEmitter<{firstName: string, lastName:string}>();

  @Output() public registrationDeferred = new EventEmitter<void>();

  public submitRegistrationRequest(): void {
    if(this.isFormValid()){
      this.developerRegistered.emit({firstName: this.firstName(), lastName: this.lastName()});
    this.clearFields()
    }
  }

  public deferRegistration(): void{
    this.clearFields();
    this.registrationDeferred.emit();
  }

  public clearFields(): void{
    this.firstName.set('');
    this.lastName.set('');
  }

}
