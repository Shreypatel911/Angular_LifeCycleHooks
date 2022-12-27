import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() valueChild : string;

  //This is the first thing to be called 
  //Input variables are not initialized and you can't accessed its values
  constructor(){
    console.log("Constructor of demo component");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called");
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  //Every time there is change in the projected values of parent to child and at every change detection cycle(<ng-content> </ng-content>)
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called");
  }

  //Only once when the projected values from the parent to the child are initialized(<ng-content> </ng-content>)
  //This method is called only once during the component’s lifecycle, after the first ngDoCheck
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called");
  }

  //At every change detection cycle
  ngDoCheck(): void {
    console.log("ngDoCheck is called");
  }

  //Whenever there is a change detected by change detection cycle and after the constructor
  //Input variables are initialized and you can accessed it
  //Whenever there is change in input variables of the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called");
  }

  //Only once after the first change detection cycle after the constructor and ngOnChanges method
  //Input variables are initialized and you can accessed it
  ngOnInit(): void {
    console.log("ngOnInit is called");
  }
}
