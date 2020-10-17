import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found.component';
import { DisabledOnSelectorDirective } from './disabled-on-selector.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    BookComponent,
    AppComponent,
    DisabledOnSelectorDirective
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
