import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../user.modal';
import { CommonModule } from '@angular/common';
import { MaskPhonePipe } from '../mask-phone.pipe';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MaskPhonePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users$: Observable<User[]> | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }
  getAvatarUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;
  }
}
