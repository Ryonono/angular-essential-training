import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: 'Series',
      category: 'Science and Fiction',
      year: 2010,
      watchedOn: 12941166543,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 3,
      name: "The Redemption",
      medium: 'Series',
      category: "Action",
      year: 2018,
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 4,
      name: "Hoppers",
      medium: "Drama",
      category: "Comedy",
      year: 2016,
      watchedOn: 21668573243,
      isFavorite: false
    },
    {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Touching",
      year: 2017,
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 6,
      name: "Green Book",
      medium: "Movies",
      category: "Touching",
      year: 2014,
      watchedOn: 673716385285,
      isFavorite: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // onMediaItemDelete(mediaItem) {
  //   console.log("Deleted");
  // }
}
