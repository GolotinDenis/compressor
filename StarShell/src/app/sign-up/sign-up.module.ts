import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

const signUpRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: PageComponent }
])
@NgModule({
  imports: [
    CommonModule,
    signUpRouting,
    MatTabsModule,
  ],
  exports: [MatTabsModule],
  declarations: [PageComponent],
  bootstrap: [PageComponent]
})
export class SignUpModule { }
