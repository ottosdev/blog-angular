import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {MegaMenuModule} from "primeng/megamenu";
import {InputTextModule} from "primeng/inputtext";
import {AccordionModule} from "primeng/accordion";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import { InputComponentComponent } from './components/input-component/input-component.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {MessageModule} from "primeng/message";
import {SharedModule} from "./shared/shared.module";
import { EditPostComponent } from './components/edit-post/edit-post.component';
import {DropdownModule} from "primeng/dropdown";
@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
