import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
//import * as $ from 'jquery';
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public http: HttpClient;
  dados: any[];
  areas: any[];
  category: any;
  area: any;
  letter: any;
  ingredient: any;

  constructor(
    http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.http = http;
    this.dados = [];
    this.areas = [];
    this.category = '';
    this.area = '';
    this.letter = '';
    this.ingredient = '';
    $('#nothing-here').hide();
  }

  ngOnInit() {
    let url = environment.url + 'meals'

    this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.area = params.get('area');
        this.letter = params.get('letter');
        this.ingredient = params.get('ingredient');

        if(this.category){
          url += '-category/' + this.category;
        } else if(this.area){
          url += '-area/' + this.area;
        } else if(this.letter){
          url += '-letter/' + this.letter;
        } else if(this.ingredient){
          url += '-ingredient/' + this.ingredient;
        }
    });

    this.loadingMeals(url);
    this.loadingAreas();
  }

  loadingMeals(url) {

    $('#nothing-here').hide();

    this.http.get<any>(url)
      .subscribe( data => {

        this.dados = data;

        if ( this.dados.length == 0 ) {
          $('#nothing-here').show();
        }

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
    let url = environment.url + 'meals'
    var search = $("#search").val();
    if ( search && search != '' ) {
      url += '?search=' + search
    }
    this.loadingMeals(url);
  }

}
