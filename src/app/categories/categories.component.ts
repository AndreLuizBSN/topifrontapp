import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
//import * as $ from 'jquery';
declare let $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    public http: HttpClient;
    dados: any[];
    areas: any[];

    constructor(
      http: HttpClient,
      private router: Router,
    ) {
      this.http = http;
      this.dados = [];
      this.areas = [];
    }

    ngOnInit() {
      let url = environment.url + 'categories'
      this.loadingCategories(url);
      this.loadingAreas();
    }

    loadingCategories(url) {

      this.http.get<any>(url)
        .subscribe( data => {

          this.dados = data;
          console.log(data);


      }, error =>{
        alert("Erro ao processar sua requisição!")
      });
    }

    loadingAreas() {
      let url = environment.url + 'areas'
      this.http.get<any>(url)
        .subscribe( data => {

          this.areas = data;

      }, error =>{
        alert("Erro ao processar sua requisição!")
      });
    }

  }
