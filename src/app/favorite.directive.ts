import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mvFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  // Angularではイベント名にOnをつけずにそのまま動くのでonをつけずにmouseenterのみで良い(メソッド名はわかりやすさのためにOnが必要)
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set mvFavorite(value) {
    this.isFavorite = value;
  }
}