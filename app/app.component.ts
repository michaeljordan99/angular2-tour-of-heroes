import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div style="width: 750px;border: 1px solid #e0e2e5;padding: 20px;position: absolute;right: 40px;">
      Some more content / nav would go here
    </div>
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
