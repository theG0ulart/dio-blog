import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Post } from '../../model/Post';
import { PostService } from '../../service/post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [MatCardModule, FormsModule, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post();
  nome: String = '';
  searchName: string = '';

  constructor(private postService: PostService) {}
  
  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/feed');
    });
  }

  filterPosts() {
    if (this.searchName.trim() === '') {
      this.findPosts();
    } else {
      this.postService.getPosts().subscribe((data: Post[]) => {
        this.listPost = data.filter(post => post.nome.toLowerCase().includes(this.searchName.toLowerCase()));
      })
    }
  }
}
