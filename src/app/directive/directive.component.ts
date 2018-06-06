import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isClicked: boolean;
  lastDiv: string = 'Le dernier exemple';
  checkForStyle: {'backgroundColor'} = {'backgroundColor': 'transparent'};
  doubleBinding: string = '';
  status: boolean = true;
  texts:string[] = ['un','deux','trois'];
  constructor() { }

  ngOnInit() {
    this.isClicked = false;
    
  }

  toggleDiv () {
    this.isClicked = !this.isClicked;
    this.checkForStyle = {'backgroundColor': this.isClicked ? 'red' : 'transparent'  }; 
  }
  

  
    

}
