import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe(user => {
        this.user = user;
      });
    }
  }

  onSubmit() {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
