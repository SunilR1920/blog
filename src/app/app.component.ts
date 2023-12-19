import { Component } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';

import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
  // imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class AppComponent {
  title = 'blog';
  data = "Code step by Step.";
  displayVal:string = '';
  name = "Sunil";
  disable = true;
  show = 'Yes';
  color = 'green';
  bgColor = 'yellow';
  users=['Sunil','Balu','Kavita','Ashvini','Bhavesh','Raju']
  userDetail=[
    {name:'Sunil', city:'Aurangabad', phon:'8888', social:['facebook','insta','twiter']},
    {name:'Balu', city:'Aurangabad', phon:'2222', social:['facebook','insta','twiter']},
    {name:'Raju', city:'Aurangabad', phon:'5555', social:['facebook','insta','twiter']}
  ]
  userFormData:any={};
  listItom:any[]=[];
  twoWayBindingProps:any;
  pipesInAngular="This Is Pipe Example to convert Upercase";
  getValue(){
    return(
      "This Is the Function Data..."
    )
  }
  getfun(name:string){
    alert(name);
  }
  getfun2(){
    console.warn('Function colled');
  }
  getData(val:string){
    console.warn(val);
    console.log(val);
  }
  getInputValue(value:string){
    console.log(value)
    this.displayVal=value
  }
  count=0;
  counter(type:string){
    type==='add' ?this.count++:this.count--;
  }
  // getToggle(){
  //   this.disable=!this.disable
  // }
  update1(){
    this.color="blue"
    this.bgColor="skyblue"
  }
  update2(){
    this.color="red"
    this.bgColor="lightpink"
  }
  update3(){
    this.color="darkgreen"
    this.bgColor="greenyellow"
  }
  update4(){
    this.color="purple"
    this.bgColor="lightyellow"
  }
getFormData(formData:NgForm){
  this.userFormData=formData
  console.log(this.userFormData)
}
addListItom(item:string){
  this.listItom.push({id:this.listItom.length, name:item});
}
removeListItom(id:number)
{
  this.listItom=this.listItom.filter(item=>item.id!==id);
}
getIdVal(item:any){
  console.log(this.name);
}
}
