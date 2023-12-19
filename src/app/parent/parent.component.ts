import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
 parentData=10;
 childToParentData="s";
 updateChild(){
  this.parentData= Math.floor(Math.random()*10)
 }
 userDetail=[
  {name:'Balu Palhate', email:'balu@test.com'},
  {name:'Raju Jadhav', email:'raju@test.com'},
  {name:'Bhavesh Tupe', email:'tupe@test.com'},
 ]
 updateChildToParent(item:string){
  this.childToParentData=item;
 }
}
