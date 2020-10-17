import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeData: any =[];
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.getRecipes();
  }


  getRecipes(){
    this.recipeService.getRecipeList().subscribe((response)=>{
      this.recipeData = response || [];
    })
  }

}
