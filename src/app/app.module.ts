import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // ✅ Import AppRoutingModule
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent], // ✅ No standalone components here
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()], // ✅ Import AppRoutingModule
  bootstrap: [AppComponent],
})
export class AppModule {}