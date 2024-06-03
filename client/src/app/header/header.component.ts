import { Component } from '@angular/core';
import {faCoffee, faUser} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected readonly faCoffee = faCoffee;
  protected readonly faUser = faUser;
}

