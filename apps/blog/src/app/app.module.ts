import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
