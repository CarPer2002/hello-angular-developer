import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeveloperGreeting} from './greetings/presentation/components/developer-greeting/developer-greeting.component';

@Component({
  selector: 'app-root',
  imports: [
    DeveloperGreeting
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-angular-developer');
  public firstName: string = '';
  public lastName: string = '';

  public updateRegisteredDeveloperInfo(developer: {firstName: string, lastName: string}){
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  public resetRegisteredDeveloperInfo(){
    this.firstName = '';
    this.lastName = '';
  }
}
