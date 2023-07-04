import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PronosticoComponent } from './components/pronostico/pronostico.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pronostico-de-cancer', component: PronosticoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
