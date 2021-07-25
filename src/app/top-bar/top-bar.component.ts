import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from "@angular/router";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public http: HttpClient;
  categories: any[];

  constructor(
    http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.http = http;
    this.categories = [];
  }


  ngOnInit() {
    let url = environment.url + 'categoriesshort'
    this.loadCategories( url );
  }

  loadCategories(url) {
    this.http.get<any>(url)
      .subscribe( data => {
        var ix = 5
        this.categories = [];
        data.forEach((d, index) => {
          if ( index <= ix ) {
            this.categories.push( d );
          }
        });
    }, error =>{
      alert("Erro ao processar sua requisição!")
    });
  }

  suggestion() {
    let urlLucky = environment.url + 'meals-suggestion'
    this.http.get<any>(urlLucky)
      .subscribe( data => {
        window.location.href = '/meal/' + data.id;
    }, error =>{
      alert("Erro ao processar sua requisição!")
    });
  }

  showHideMenu() {
    if ( $('.itens').css('display') == 'block' ) {
      $('.itens').slideUp(300);
    } else {
      $('.itens').slideDown(300);
    }
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
