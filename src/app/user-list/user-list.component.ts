import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <h2 class="custom">
      user-list works!
    </h2>
    <h1>
      This is the Sunil From Aurangabad.
    </h1>
  `,
  styles: [
    `.custom{color:red}
    h1{color:green}`
  ]
})
export class UserListComponent {

}
