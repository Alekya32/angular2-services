import {Component} from '@angular/core'
import{PostComponent} from './services/post.component'
import {PostService} from './services/post.service'

@Component({
	selector:"my-app",
	template:`<h1>App Component</h1>
	<br>
	<my-service></my-service>`,
	providers:[PostService]
})
export class AppComponent{

}