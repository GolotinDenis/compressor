import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompressorComponent } from './compressor/compressor.component';
import { RouterModule, Routes } from '@angular/router';
import { CompressorService } from './compressor.service'
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'compressor', component: CompressorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompressorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CompressorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
