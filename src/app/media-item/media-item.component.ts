import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  // name = 'The Redemption';

  // Inputを使用すると、その親要素が定義したプロパティを子要素で使用できるようになる
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log('Deleting it');
    this.delete.emit(this.mediaItem);
  }
}
