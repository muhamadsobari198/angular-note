import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// component
import { AppComponent } from './app.component';
import { ComNoteComponent } from './com-note/com-note.component';
import { PipeSensorPipe } from './pipe-sensor.pipe';
import { FormNoteComponent } from './form-note/form-note.component';
import { ComListnoteComponent } from './com-listnote/com-listnote.component';

// material & animations
import { 
  MdButtonModule, 
  MdInputModule,
  MdListModule,
  MdToolbarModule,
  MdIconModule,
  MdSnackBarModule,
  MdTooltipModule,
  MdMenuModule,
  MdCardModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { myRouter } from './app.router';

// services
import { ServiceNoteService } from './service-note.service';
import { ComAddnoteComponent } from './com-addnote/com-addnote.component';
import { ComSearchComponent } from './com-search/com-search.component';
import { PipeSearchPipe } from './pipe-search.pipe';

// dari newbie untuk newbie
@NgModule({
  declarations: [
    AppComponent,
    ComNoteComponent,
    PipeSensorPipe,
    FormNoteComponent,
    ComListnoteComponent,
    ComAddnoteComponent,
    ComSearchComponent,
    PipeSearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    myRouter,
    BrowserAnimationsModule,
    // material component
    MdButtonModule, 
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdMenuModule,
    MdCardModule,
    // end of material component
  ],
  providers: [
    ServiceNoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
