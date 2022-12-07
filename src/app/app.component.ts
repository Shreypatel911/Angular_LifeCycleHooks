import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-lifecycle';
  value : string = '';
  destroy : boolean = true;
  

  onSubmit(input : HTMLInputElement){
    this.value = input.value;
  }

  onDestroy(){
    this.destroy = false;
  }
}
//pop up in form 
//file upload in form 
//confirmation pop up on deleting the entry