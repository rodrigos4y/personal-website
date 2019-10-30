import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface GithubResponse{
  incomplete_results: boolean,
  items: any[],
  total_count: number
}

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
      const url = 'https://api.github.com/search/repositories';
      const params = new HttpParams().set('q', this.searchText);

      this.http.get<GithubResponse>(url, {params})
        .subscribe(
          response =>{
            this.projects = response.items;
          }
        )
    }
  }

}
