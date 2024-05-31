import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent {
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
}
