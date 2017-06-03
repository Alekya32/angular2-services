import {Component} from '@angular/core'
import {PostService} from './post.service'

@Component({
	selector:"my-service",
	template:`<div class="container">
		<h1>My Posts</h1>
		<br>
		<div>
			<label>Title:</label>
			<input type="text" class="form-control" [(ngModel)]="title"/><br>
			<label>Body:</label>
			<input class="form-control" type="text" [(ngModel)]="body"/><br>
			<input class="btn btn-primary" type="button" (click)="addPost()" value="Add Post"/>
		</div>
		<div>
			<ul *ngFor="let post of posts">
			<li><b>{{post.title}}</b></li>
			<li>{{post.body}}</li>
			</ul>
		</div>
		</div>`
})

export class PostComponent{
		private posts:any[];
		private title:string;
		private body:string;
		private newPost:any;

		constructor( private _postService:PostService){ //Dependency injection
			this._postService.getPosts().subscribe(response =>{
                this.posts=response
            });
		}
		addPost(){
			this.newPost={
				title:this.title,
				body:this.body
			}
			this._postService.addNewPost(this.newPost)	//to post data to webpage
			console.log("Hello...!!!!")
			console.log(this.newPost)
		}
}