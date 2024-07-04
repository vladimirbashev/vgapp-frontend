import {Component, inject, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ErrorMessageComponent} from "../../../shared/components/error-message/error-message.component";
import {Destroyer} from "../../../shared/components/base";
import {FilesFacade} from "../../store/files.facade";
import {Observable} from "rxjs";
import {FilesType} from "../../types/filesResponseInterface";
import {AsyncPipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatProgressBar} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@ngbracket/ngx-layout";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [
    MatPaginator,
    ErrorMessageComponent,
    AsyncPipe,
    RouterLink,
    MatProgressBar,
    FlexLayoutModule,
    MatButton,
    MatCardModule
  ],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent extends Destroyer implements OnInit{
  private readonly filesFacade: FilesFacade = inject(FilesFacade);

  isLoading$: Observable<boolean> = this.filesFacade.isLoading$;
  error$: Observable<string> = this.filesFacade.error$;
  filesCount$: Observable<number> = this.filesFacade.filesCount$;
  files$: Observable<FilesType> = this.filesFacade.files$;

  ngOnInit(): void {
    this.filesFacade.get(8, 0, 10);
  }

  handlePageEvent(e: PageEvent) {
    this.filesFacade.get(8, e.pageIndex *  e.pageSize, e.pageSize);
  }
}
