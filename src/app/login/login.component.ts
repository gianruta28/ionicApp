import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  endpoint: string;
  constructor() {
    this.endpoint = 'localhost:8000/login';
  }

  ngOnInit() {}

}
