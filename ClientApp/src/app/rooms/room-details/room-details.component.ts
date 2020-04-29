import {Component, OnInit} from '@angular/core';
import {RoomService} from '../room.service';
import {ActivatedRoute} from '@angular/router';
import {RoomForDetails} from '../../shared/room-for-details.model';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room: RoomForDetails;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private roomService: RoomService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.router.data.subscribe(data => {
      this.room = data.room;
    });

    this.galleryOptions = [
      {
        width: '100%',
        height: '100%',
        thumbnails: false,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      }];

    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.room.photos) {
      imageUrls.push({
        small: photo.photoUrl,
        medium: photo.photoUrl,
        big: photo.photoUrl,
        description: photo.id
      });
    }
    console.log(imageUrls);
    return imageUrls;
  }

  // loadRoom() {
  //   this.roomService.getRoom(this.router.snapshot.params['id'])
  //     .subscribe((room: RoomForDetails) => {
  //       this.room = room;
  //       console.log(this.room)
  //     }, error => {
  //       console.log(error)
  //     })
  // }
}
