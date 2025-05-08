import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
  @ViewChild("overlay") overlay?: ElementRef;

  constructor() {
    this.title = '';
    this.shown = false;
  }

  closeModal(e: MouseEvent) {
    if(e.target === this.overlay?.nativeElement)
    {
      this.shown = false;
      this.shownChange.emit(this.shown);
    }
  }
}
