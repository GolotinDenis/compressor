import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SignUpModule } from './sign-up/sign-up.module'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignUpModule,
    HeaderModule,
    rootRouting,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  exports:[FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
