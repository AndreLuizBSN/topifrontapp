import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from "@angular/router";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
//import * as $ from 'jquery';
declare let $: any;

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  faInfo = faInfo;
  public http: HttpClient;
  dados: any[];
  areas: any[];
  name: any;
  description: any;

  constructor(
    http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.http = http;
    this.dados = [];
    this.areas = [];
    this.name = '';
    this.description = '';
  }

  ngOnInit() {
    let url = environment.url + 'ingredients'
    this.loadingIngredients(url);
    this.loadingAreas();
    $(".modal").hide();
  }

  loadingIngredients(url) {

    this.http.get<any>(url)
      .subscribe( data => {

        this.dados = data;
        this.dados.forEach(i => {
          i.class = '';
        });

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

  search() {
    var search = $("#search").val();
    if ( !search || search == '' ) {
      this.dados.forEach(i => {
        i.class = '';
      });
      return;
    }

    this.dados.forEach(i => {
      if ( i.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ) {
        i.class = '';
      } else {
        i.class = 'hide';
      }
    });
  }

  showDescription( name, description ) {
    this.name = name;
    this.description = description;
    $(".modal").show()
  }

  closeModdal() {
    $(".modal").hide()
  }

}
