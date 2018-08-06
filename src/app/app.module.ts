import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompressorService } from './compressor.service';
import { LoginComponent } from './login/login.component';
import { CompressorComponent } from './compressor/compressor.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'compressor', component: CompressorComponent },
  { path: '*', redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompressorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    CompressorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
