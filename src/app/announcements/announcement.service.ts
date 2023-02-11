import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Announcement } from './announcement.model';
import { AuthService } from "../authentication/auth.service";

@Injectable()
export class AnnouncementService {

  private url = environment.database_url;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAnnouncements(): Observable<Announcement[]> {

    return this.http
      .get<Announcement[]>(this.url + "announcements.json")
      .pipe(
        map(data => {
          const announcements: Announcement[] = [];
          for(const key in data) {
            announcements.push({ ...data[key], id: key });
          }
          return announcements;
        })
      );
  }

  createAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.authService.user.pipe(
      take(1),
      tap(user => console.log(user)),
      exhaustMap(user => {
        return this.http.post<Announcement>(this.url + "announcements.json?auth=" + user?.token, announcement);
      })
    )
  }

}
