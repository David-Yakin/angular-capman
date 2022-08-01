import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { PacManComponent } from './pages/pac-man/pac-man.component';
import { MoveElementDirective } from './directives/move-element.directive';

@NgModule({
  declarations: [AppComponent, PacManComponent, MoveElementDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
