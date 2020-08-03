import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration-app';
  users = new Array();
  name;
  surname;
  id;
  email;
  contact;

    idValidation: string ;
    contactValidation: string;
    emailValidation: string;


    constructor(){
      this.emailIsValid("gmail.com");
    }


    
  addUser(){
    if (this.id.length == 13 && this.contact.length == 10 && this.emailIsValid(this.email))
    {
      this.users.push(new User(this.name, this.surname, this.id, this.email, this.contact));
      console.log(this.users)
    }else if(this.contact.length != 10)
    {
      
      this.contactValidation ="Please enter 10 digits"

    }
    else if (this.id.length != 13)
    {
      this.idValidation ="Please enter 13 digits"
    }
     else if (this.emailIsValid(this.email) == false)
     {
       this.emailValidation ="Please enter valid email address"
     }   else {
       alert("Error!")
     }

  }

  
  deleteUser(i)
  {
    console.log(i)
    this.users.splice(i, 1)
  }
  updateUser(i)
  {
    console.log(i)
    this.users.splice(i,1,i)
  }

   emailIsValid (email)
    {
    let a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ;
    console.log(a)

    if(a)
    {
      return a

    }
    else
    {
      return false      
    }
  }
}
