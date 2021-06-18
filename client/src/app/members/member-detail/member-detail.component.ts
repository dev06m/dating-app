import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member; 
  galleryOptions: NgxGalleryOptions[];
  userPhotos: NgxGalleryImage[];

  constructor(private memberService: MembersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(

    ) 
    this.loadMember()

    
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      },
      
    ];
    
    
  }
  
  loadMember() {
    this.memberService.getMember(this.activatedRoute.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      console.log('member: ', this.member)
      this.userPhotos = this.getPhotos();
    })
  }

  getPhotos() {
    let photoUrls = [];
    for (let photo of this.member.photos) {
      photoUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      });
      console.log("photouurls: ", photoUrls)
      return photoUrls;
    }
  }

}
