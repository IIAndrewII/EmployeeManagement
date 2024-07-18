<mat-card >
  <mat-card - title > User List < /mat-card-title>
    < mat - card - content >
    <mat-list >
    <mat-list - item * ngFor="let user of users" >
      {{ user.name }} - {{ user.email }}
<button mat - button(click)="viewUser(user.id)" > View < /button>
  < /mat-list-item>
  < /mat-list>
  < /mat-card-content>
  < /mat-card>
