import { Component, OnInit } from '@angular/core';
import { CommentsResult, Comments } from 'src/app/interfaces/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];


  constructor(private service: CommentsService, private route: ActivatedRoute) {
    //Static Route with id from Param
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getComments(Number(id)).subscribe((result: CommentsResult) => {
      console.log(result.data);
      this.comments = result.data;
    });

  }

  ngOnInit(): void {

  }


}


