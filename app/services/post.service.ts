import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from '@rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/operator/map'

interface Post{
    _id: number,
    title:string,
    body:string
}



@Injectable()	//Decorator



export class PostService{
	private posts:any[];
    private apiUrl:string;
    private postData:any;
	
    constructor(private _http:Http){
    this.apiUrl="https://jsonplaceholder.typicode.com/posts";
	
    /*	this.posts=[{
			title :'Hello...',
			body:'Good Afternoon'
		},{
			title:'latest updates',
			body:'Updates...!!!!!'
		},
		{
			title:'Angular2',
			body:'Services....'
		},
		]*/
	}
	
    getPosts():Observable<Post[]>{
        return this._http
                      .get(this.apiUrl)
                      .map((response)=>
                      return response.json()
                      );
        //console.log(data)
		//return this.posts;
	}
	
    addNewPost(newPost:any){	//to post data from service to component
		this.posts.push(newPost)
	}
}