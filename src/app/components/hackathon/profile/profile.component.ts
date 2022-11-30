import { Component, OnInit } from '@angular/core';
import {DividerModule} from 'primeng/divider';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  special: boolean = false;
  companies: any[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.companies = [{
      name: 'Escola da aeronautica',
      id: 1,
    }
    ]
  }

}
