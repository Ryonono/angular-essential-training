import { Pipe, PipeTransform } from '@angular/core';

// Pipeはname, pureの二つのプロパティを取ることができる。pureは、pipeはstatelessかstatefulかを示すことができる
// →デフォルト値がpure: true = statelessなので、trueの場合は書かなくても良い
@Pipe({
  name: 'categoryList',
  // pure: true
})

export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}