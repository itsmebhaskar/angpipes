import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Bhaskar';
  salary:string="20000";
  JoiningDate:Date=new Date();

  age:Observable<number>=of(26);

  ngOnInit()
  {
    // this.age.subscribe(age=>{
    //  console.log("adding to console "+age);
    // });
    
  }
  

}
