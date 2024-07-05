import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ErrorMessageComponent} from "../../../shared/components/error-message/error-message.component";
import {Destroyer} from "../../../shared/components/base";
import {FilesFacade} from "../../store/files.facade";
import {Observable, takeUntil} from "rxjs";
import {FileInterface, FilesType} from "../../types/filesResponseInterface";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatProgressBar} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@ngbracket/ngx-layout";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";


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
    MatTableModule,
    MatIcon,
    MatIconButton,
    FormsModule
  ],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent extends Destroyer implements OnInit{
  @ViewChild('fileUpload')
  fileUpload: ElementRef

  private readonly filesFacade: FilesFacade = inject(FilesFacade);

  isLoading$: Observable<boolean> = this.filesFacade.isLoading$;
  error$: Observable<string> = this.filesFacade.error$;
  filesCount$: Observable<number> = this.filesFacade.filesCount$;
  files$: Observable<FilesType> = this.filesFacade.files$;

  dataSource: FileInterface[] = []
  displayedColumns: string[] = ['path', 'status', 'action'];

  ngOnInit(): void {
    this.filesFacade.get('me', 0, 10);
    this.files$.pipe(takeUntil(this.destroy$)).subscribe(files => {
      this.dataSource = files ? files : [];
    })
  }

  handlePageEvent(e: PageEvent) {
    this.filesFacade.get('me', e.pageIndex *  e.pageSize, e.pageSize);
  }

  removeFile(event: any, file: FileInterface) {
    // this.filesFacade.delete(file.id);
  }

  onFileUploadClick(event: any) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  onInput(event: any) {

  }

  onFileSelected(event: any) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log('event::::::', event)
    this.filesFacade.post(files[0]);
    this.clearInputElement();
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }
}
