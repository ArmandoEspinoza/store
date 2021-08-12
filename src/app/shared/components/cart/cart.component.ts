import { Component } from "@angular/core";
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  template:`
  <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">

  <button mat-button [matMenuTriggerFor]="menu"><mat-icon matBadge="{{dataCart.quantity}}" matBadgeColor="accent">shopping_cart</mat-icon></button>
<mat-menu #menu="matMenu">
  <p>Total: {{dataCart.total | currency}}</p>
</mat-menu>

  

  
  
  </ng-container>`,
})
export class CartComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: ShoppingCartService) { }
}