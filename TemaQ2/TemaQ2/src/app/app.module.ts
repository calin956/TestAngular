import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { Logger }               from './logger.service';
import { HttpClientModule }     from '@angular/common/http';

@NgModule({
  imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
  ],
  declarations: [
        AppComponent,
  ],
  providers: [
        Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
