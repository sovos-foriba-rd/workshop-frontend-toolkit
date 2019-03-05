import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent {
  data = [];
  constructor(private apiConnection: HttpClient){
    this.apiConnection.get<any>("http://localhost:3000/data").subscribe(response =>{
      this.data = response;
    })
  }
}
