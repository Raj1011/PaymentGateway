import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient) { 
    
  }

  getRecipeList(){
    return this.http.get<any>('http://starlord.hackerearth.com/recipe');
  }
}
