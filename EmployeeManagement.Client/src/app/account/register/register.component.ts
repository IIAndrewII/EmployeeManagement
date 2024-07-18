<mat-card >
  <mat-card - title > Register < /mat-card-title>
  < mat - card - content >
  <form (ngSubmit)="register()" >
    <mat-form - field >
    <input matInput placeholder = "Name"[(ngModel)] = "name" name = "name" required >
      </mat-form-field>
      < mat - form - field >
      <input matInput placeholder = "Email"[(ngModel)] = "email" name = "email" required >
        </mat-form-field>
        < mat - form - field >
        <input matInput type = "password" placeholder = "Password"[(ngModel)] = "password" name = "password" required >
          </mat-form-field>
          < button mat - raised - button color = "primary" type = "submit" > Register < /button>
            < /form>
            < /mat-card-content>
            < /mat-card>
