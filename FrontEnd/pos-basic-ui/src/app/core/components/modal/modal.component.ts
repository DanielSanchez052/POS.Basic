import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input({ required: true }) title;
  @Input({ required: true }) shown: boolean;
  @Output() shownChange = new EventEmitter<boolean>();

  constructor() {
    this.title = '';
    this.shown = false;
  }

  closeModal() {
    this.shown = false;
    this.shownChange.emit(this.shown);
  }
}
