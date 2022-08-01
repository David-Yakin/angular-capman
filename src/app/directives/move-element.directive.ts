import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[moveElement]',
})
export class MoveElementDirective {
  private up: boolean = false;
  private down: boolean = false;
  private left: boolean = false;
  private right: boolean = false;

  constructor(private element: ElementRef<HTMLElement>) {
    element.nativeElement.style.position = 'absolute';
    element.nativeElement.style.top = '50px';
    element.nativeElement.style.left = '50px';
    setInterval(() => {
      this.moveElement();
    }, 10);
  }

  @HostListener('window:keydown', ['$event'])
  whenUserPressOnAnyKey(e: KeyboardEvent): void {
    if (e.code == 'ArrowUp') this.up = true;
    if (e.code == 'ArrowDown') this.down = true;
    if (e.code == 'ArrowLeft') this.left = true;
    if (e.code == 'ArrowRight') this.right = true;
  }

  @HostListener('window:keyup', ['$event'])
  whenUserReleaseKey(e: KeyboardEvent): void {
    if (e.code == 'ArrowUp') this.up = false;
    if (e.code == 'ArrowDown') this.down = false;
    if (e.code == 'ArrowLeft') this.left = false;
    if (e.code == 'ArrowRight') this.right = false;
  }

  moveElement(): void {
    let oldTop = parseInt(this.element.nativeElement.style.top);
    let oldLeft = parseInt(this.element.nativeElement.style.left);

    if (this.up) {
      if (oldTop - 1 <= 0) return;
      this.element.nativeElement.style.top = oldTop - 1 + 'px';
      this.element.nativeElement.style.transform = 'rotate(270deg)';
    }
    if (this.down) {
      this.element.nativeElement.style.top = oldTop + 1 + 'px';
      this.element.nativeElement.style.transform = 'rotate(90deg)';
    }
    if (this.left) {
      if (oldLeft - 1 <= 0) return;
      this.element.nativeElement.style.left = oldLeft - 1 + 'px';
      this.element.nativeElement.style.transform = 'scaleX(-1)';
    }
    if (this.right) {
      this.element.nativeElement.style.left = oldLeft + 1 + 'px';
      this.element.nativeElement.style.transform = 'rotate(0deg)';
    }
  }
}
