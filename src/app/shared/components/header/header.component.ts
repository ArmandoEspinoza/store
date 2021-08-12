import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  template:`<div class="sticker"><mat-toolbar color="primary">
  <span>MY SNKRS</span>
  <span class="spacer"></span>
  <app-cart></app-cart>
</mat-toolbar>
</div> 
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
