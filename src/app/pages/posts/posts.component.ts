import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PostResult, Posts } from 'src/app/interfaces/post';
  
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts [] = [];

  constructor(private service: UsersService) {
    this.getPosts();
   }

  ngOnInit(): void {
  }
 
  getPosts(): void{
    this.service.getPosts().subscribe((result: PostResult) =>{
      console.log(result.data);
      this.posts = result.data;
    });
  }
}
