import { Component, OnInit } from '@angular/core';
import { LanguageResult, Languages } from 'src/app/interfaces/language';
import {User, UserResult } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { PostResult, Posts } from 'src/app/interfaces/post';
  
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[] = [];
  language: Languages[] = [];
  post: Posts[] = [];

  constructor(private service: UsersService) {
    this.getUsers();
    this.giveMeLanguages(); 
    this.getPosts();
   } 

  ngOnInit(): void {
  }

  getUsers(): void{
    this.service.getUsers().subscribe((result: UserResult) => {
      console.log(result.data);
      this.users = result.data;
    });
  }
 
  giveMeLanguages(): void{
    this.service.getLanguages().subscribe((result: LanguageResult) =>{
      console.log(result.data);
      this.language = result.data;
    });
  }
  getPosts(): void{
    this.service.getPosts().subscribe((result: PostResult) =>{
      console.log(result.data);
      this.post = result.data;
    });
  }
}
