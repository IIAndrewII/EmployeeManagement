import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';

@Component({
selector: 'app-toolbar',
templateUrl: './toolbar.component.html',
styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
isAuthenticated = false;

constructor(private authService: AuthService, private router: Router) {}

ngOnInit(): void {
this.authService.authStatus$.subscribe(status => {
this.isAuthenticated = status;
});
}

login(): void {
this.router.navigate(['/login']);
}

logout(): void {
this.authService.logout();
this.router.navigate(['/login']);
}

register(): void {
this.router.navigate(['/register']);
}
}