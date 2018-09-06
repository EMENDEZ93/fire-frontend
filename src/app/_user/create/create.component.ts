import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {CreateService} from './create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CreateService]
})
export class CreateComponent implements OnInit {

  user: User;
  isValid = true;
  message = '';

  constructor( private createService: CreateService, private router: Router ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  public save(): void {
    this.isValid = this.createService.validate(this.user);

    if (this.isValid) {
      this.createService.save(this.user).subscribe(res => {
        if (res.id){
          this.router.navigate(['/users']);
        }else {
          this.message = 'campos obligatorios';
          this.isValid = false;
        }
      });
    } else {
      this.message = 'campos obligatorios';
    }

  }

}
