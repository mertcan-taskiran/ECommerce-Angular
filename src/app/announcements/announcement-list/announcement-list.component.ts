import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement.model';
import { AnnouncementService } from '../announcement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css'],
  providers: [AnnouncementService]
})
export class AnnouncementListComponent implements OnInit {

  announcements: Announcement[] = [];

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.announcementService.getAnnouncements().subscribe(data => {
        this.announcements = data;
      });
    });

  }

}
