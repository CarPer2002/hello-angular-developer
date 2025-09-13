import {Component, computed, input} from '@angular/core';
import {Developer} from '../../../domain/model/developer.entity';

@Component({
  selector: 'app-developer-greeting',
  standalone: true,
  imports: [],
  templateUrl: './developer-greeting.component.html',
  styleUrl: './developer-greeting.component.css'
})
export class DeveloperGreeting {

  firstName = input<string>('');
  lastName = input<string>('');
  fullName = computed(() => {
    if(!this.firstName() && !this.lastName()) return 'Anonymus Developer';
    const developer = new Developer(this.firstName(), this.lastName());
    return developer.fullName;
  });
  isRegistered = computed(() => !!this.firstName() && !!this.lastName());

}
