import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import {  AuthService } from './auth.service'
import { HttpClientModule } from '@angular/common/http'
const signUpRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: PageComponent }
])
@NgModule({
  imports: [
    CommonModule,
    signUpRouting,
    MatTabsModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[AuthService],
  exports: [MatTabsModule],
  declarations: [PageComponent],
  bootstrap: [PageComponent]
})
export class SignUpModule { }
