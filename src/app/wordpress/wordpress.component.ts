import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.css']
})
export class WordpressComponent implements OnInit {

  searchText = '';
  projects = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getProjects(){
    if(this.searchText){
      const url = 'https://api.github.com/search/repositories?q='+this.searchText;

      this.http.get(url)
        .subscribe(
          response =>{
            this.projects = response['items'];
          }
        )
    }
  }

}
