import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';
import { FilterbynamePipe } from './pipes/filterbyname.pipe';
import { FilterbysurnamePipe } from './pipes/filterbysurname.pipe';


@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditformWorkerComponent, FilterbynamePipe, FilterbysurnamePipe],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
