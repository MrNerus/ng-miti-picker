import { Component, ElementRef, HostListener, signal, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-draggable-card',
  standalone: true,
  imports: [],
  templateUrl: './draggable-card.html',
  styleUrl: './draggable-card.css'
})
export class DraggableCard implements AfterViewInit {
  x = signal(100);
  y = signal(100);
  isDragging = signal(false);

  private dragStartPointerX = 0;
  private dragStartPointerY = 0;
  private dragStartX = 0;
  private dragStartY = 0;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Center the card on initial render
    setTimeout(() => {
      const cardEl = this.elementRef.nativeElement.querySelector('.card-container');
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        this.x.set(Math.max(20, (window.innerWidth - rect.width) / 2));
        this.y.set(Math.max(20, (window.innerHeight - rect.height) / 2));
      }
    }, 0);
  }

  onPointerDown(event: PointerEvent) {
    // Only handle primary button click (usually left click)
    if (event.button !== 0) return;

    const target = event.target as HTMLElement;
    // Check if user clicked on drag handle or child of it
    if (!target.closest('.drag-handle')) return;

    this.isDragging.set(true);
    this.dragStartPointerX = event.clientX;
    this.dragStartPointerY = event.clientY;
    this.dragStartX = this.x();
    this.dragStartY = this.y();

    // Prevent text highlights/selections
    event.preventDefault();
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (!this.isDragging()) return;

    const dx = event.clientX - this.dragStartPointerX;
    const dy = event.clientY - this.dragStartPointerY;

    let newX = this.dragStartX + dx;
    let newY = this.dragStartY + dy;

    // Constraint layout boundary check
    const cardEl = this.elementRef.nativeElement.querySelector('.card-container');
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;
      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));
    }

    this.x.set(newX);
    this.y.set(newY);
  }

  @HostListener('document:pointerup')
  onPointerUp() {
    this.isDragging.set(false);
  }
}
