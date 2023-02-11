import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.css'],
  providers: [AnnouncementService]
})
export class AnnouncementCreateComponent implements OnInit {

  error: string = "";
  model:any = {
    isActive: "checked"
  };

  constructor(private announcementService: AnnouncementService, private router: Router) { }

  ngOnInit(): void {

  }

  saveAnnouncement(form: NgForm){

    const announcement  = {
      id: 1,
      name: this.model.name,
      imageUrl: this.model.imageUrl,
      description: this.model.decription,
      isActive: this.model.isActive,
    }

    if(form.valid) {
      this.announcementService.createAnnouncement(announcement).subscribe(data => {
        this.router.navigate(['/home']);
      });
    } else {
      this.error = "Formu kontrol ediniz!"
    }
  }

}
