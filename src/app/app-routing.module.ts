import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [{path:"portfolio",component:PortfolioComponent},
{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"services",component:ServicesComponent},
{path:"teams",component:TeamsComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
