import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { AboutComponent} from './component/about.component';
import { ContactComponent} from './component/contact.component';
import { routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent, UserComponent, AboutComponent, ContactComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
