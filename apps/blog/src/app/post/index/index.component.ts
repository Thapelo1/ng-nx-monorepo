import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'teneightytp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IndexComponent implements OnInit {
     
  posts: Post[] = [];
   
  constructor(public postService: PostService) { }
    
  ngOnInit() {
    this.postService.getPost().subscribe((data: Post) => {
      this.posts = [data];
      console.log(this.posts);
    });
  }
  
    
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}