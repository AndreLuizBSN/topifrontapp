import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from "@angular/router";
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
declare let $: any;
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  faCopy= faCopy;
  faCheckCircle = faCheckCircle
  public http: HttpClient;
  dado: any;
  id: any;
  areas: any[];
  dadosCategories: any[];
  dadosArea: any[];

  constructor(
    http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.http = http;
    this.dado = new Object();
    this.dado.ingredients = [];
    this.id = 0;
    this.areas = [];
    this.dadosCategories = [];
    this.dadosArea = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
    });
    let url = environment.url + 'meals/' + this.id
    this.loadingMeal(url);
    this.loadingAreas();
  }


  loadingMeal(url) {
    this.http.get<any>(url)
      .subscribe( data => {

        if ( data.length==0 ) {
          window.location.href = '/**';
        }

        this.dado = data;
        console.log(this.dado);

        this.loadingMealsByCategory(this.dado.categoy);
        this.loadingMealsByArea(this.dado.area)

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

  loadingMealsByCategory(category) {
    let urlCat = environment.url + 'meals-category/' + category
    this.http.get<any>(urlCat)
      .subscribe( data => {
        var i = 0;
        data.forEach(d => {
          if ( d.id != this.id ) {
            if ( i < 10 )
              this.dadosCategories.push(d)
            i++;
          }
        });
    }, error =>{
      alert("Erro ao processar sua requisição!")
    });
  }

  loadingMealsByArea(area) {
    let urlCat = environment.url + 'meals-area/' + area
    this.http.get<any>(urlCat)
      .subscribe( data => {
        var i = 0;
        data.forEach(d => {
          if ( d.id != this.id ) {
            if ( i < 10 )
              this.dadosArea.push(d)
            i++;
          }
        });
    }, error =>{
      alert("Erro ao processar sua requisição!")
    });
  }
}
