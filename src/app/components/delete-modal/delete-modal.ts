import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.html',
  styleUrls: ['./delete-modal.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DeleteModalComponent {
  @Input() isOpen = false;
  @Input() itemName = '';
  @Input() itemType = 'item';
  
  @Output() deleteConfirmed = new EventEmitter<void>();
  @Output() deleteCancelled = new EventEmitter<void>();

  onConfirm(): void {
    this.deleteConfirmed.emit();
  }

  onCancel(): void {
    this.deleteCancelled.emit();
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
} 