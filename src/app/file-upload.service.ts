import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${API_URL}/uploadCsv`, formData);

  }
}
