import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsResult } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {

   }

   getComments(id: number){
    return this.http.get<CommentsResult>('http://localhost:3000/comments/'+id);
   }
}
