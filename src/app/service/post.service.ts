import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl);
  }

  postMensagem(post: Post): Observable<Post>{
    return this.http.post<Post>(this.baseUrl, post);
  }
}
