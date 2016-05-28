import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { BlogComponent } from 'app/blog/blog.component';
import { ProductsComponent } from 'app/products/products.component';
import { ContactsComponent } from 'app/contacts/contacts.component';
import { AboutComponent } from 'app/about/about.component';

@Component({
selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
{path:'/', name:'About', component: AboutComponent, useAsDefault: true},
{path:'/recipes', name:'Recipes', component: RecipesComponent},
{path:'/blog', name:'Blog', component: BlogComponent},
{path:'/products', name:'Products', component: ProductsComponent},
{path:'/contacts', name:'Contacts', component: ContactsComponent}
])
export class AppComponent {
}
