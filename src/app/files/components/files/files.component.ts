import {Component, inject, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ErrorMessageComponent} from "../../../shared/components/error-message/error-message.component";
import {Destroyer} from "../../../shared/components/base";
import {FilesFacade} from "../../store/files.facade";
import {Observable, takeUntil} from "rxjs";
import {FileInterface, FilesType} from "../../types/filesResponseInterface";
import {AsyncPipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatProgressBar} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@ngbracket/ngx-layout";
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableModule
} from "@angular/material/table";


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
    MatTableModule
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

  dataSource: FileInterface[] = []
  displayedColumns: string[] = ['path', 'status'];

  ngOnInit(): void {
    this.filesFacade.get('me', 0, 10);
    this.files$.pipe(takeUntil(this.destroy$)).subscribe(files => {
      this.dataSource = files ? files : [];
    })
  }

  handlePageEvent(e: PageEvent) {
    this.filesFacade.get('me', e.pageIndex *  e.pageSize, e.pageSize);
  }
}
