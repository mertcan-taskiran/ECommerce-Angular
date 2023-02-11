import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "../authentication/admin.guard";
import { AuthenticationModule } from "../authentication/authentication.module";
import { AnnouncementCreateComponent } from "./announcement-create/announcement-create.component";
import { AnnouncementListComponent } from "./announcement-list/announcement-list.component";
import { CKEditorModule } from "ckeditor4-angular";

@NgModule({
  declarations: [
    AnnouncementListComponent,
    AnnouncementCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    AuthenticationModule,
    RouterModule.forChild([
      { path: 'announcements/create', component: AnnouncementCreateComponent, canActivate: [AdminGuard]},
    ])
  ],
  exports: [
    AnnouncementListComponent,
    AnnouncementCreateComponent
  ]
})

export class AnnouncementsModule {

}
