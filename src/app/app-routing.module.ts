import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';

const routes: Routes = [{ path: '', redirectTo: 'recipes', pathMatch: 'full' },
{ path: 'recipes', component: RecipesComponent , children :[{path:'',component:RecipeStarterComponent},{path:'new',component:RecipeEditComponent},{path:':index',component:RecipeDetailComponent},{path:':index/edit',component:RecipeEditComponent}]},
{ path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
