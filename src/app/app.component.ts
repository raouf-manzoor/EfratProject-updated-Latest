import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.post('http://localhost:1142/Api/Account/RegisterUser').subscribe(data => {
      debugger;
      data.forEach(element => {
        // console.log(element);  
        // alert(element);  
      });
      
    });
  }
}
