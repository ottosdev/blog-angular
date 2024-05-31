import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(private messageService: MessageService) { }

  showSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  showInfo(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: message });
  }
}
