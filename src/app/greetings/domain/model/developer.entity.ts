
/**

  * Developer Entity
  * This entity represents a developer with a first name and last name.
  * It provides methods to access the developer's full name.
*/

export class DeveloperEntity {

  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string{
    return `${this._firstName} ${this._lastName}`.trim();
  }
}
