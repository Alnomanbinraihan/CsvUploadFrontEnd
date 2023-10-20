import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CsvUploadFrontEnd';

  constructor(private fileUploadService: FileUploadService) { }

  selectedFileName: string = '';
  selectedFile: any;
  msg: string = "";

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
      this.msg = "";
    } else {
      this.selectedFileName = '';
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe({
        next: (response: any) => {
          this.msg = response;
        },
        error: (error: any) => {
          this.msg = error.error.text;
        }
      });
    } else {
      console.log('Please select a file before uploading.');
    }
  }

}
