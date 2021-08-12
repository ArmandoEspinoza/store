import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

import {MatBadgeModule} from '@angular/material/badge';

import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatMenuModule]
})

export class MaterialModule { }