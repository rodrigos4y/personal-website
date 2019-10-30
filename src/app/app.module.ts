import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { LoginComponent } from './admin/login/login.component';

var firebaseConfig = {
  apiKey: "AIzaSyD9n-4WP2B9GBjuX1bCPG51X0wTV1Vj6Io",
  authDomain: "teste-authentication.firebaseapp.com",
  databaseURL: "https://teste-authentication.firebaseio.com",
  projectId: "teste-authentication",
  storageBucket: "teste-authentication.appspot.com",
  messagingSenderId: "813941002971",
  appId: "1:813941002971:web:8ef09379e7abc26a1432fe",
  measurementId: "G-TKVEFYCQ6J"
};


@NgModule({
  declarations: [
    AppComponent,
    WordpressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
