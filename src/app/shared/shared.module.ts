import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {MegaMenuModule} from "primeng/megamenu";
import {InputTextModule} from "primeng/inputtext";
import {AccordionModule} from "primeng/accordion";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {MessageModule} from "primeng/message";
import {ToastAlertService} from "./toast-alert.service";


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    RippleModule,
    MegaMenuModule,
    InputTextModule,
    AccordionModule,
    InputTextareaModule,
    DialogModule,
    DividerModule,
    MessageModule
  ],
  imports: [
    CommonModule,

  ],
  providers: [
    ToastAlertService
  ]
})
export class SharedModule { }
