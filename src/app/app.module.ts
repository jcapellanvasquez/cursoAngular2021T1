import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerosnalCardComponent } from './perosnal-card/perosnal-card.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ListaComponent } from './lista/lista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimerasClasesComponent } from './primeras-clases/primeras-clases.component';
import { QuintaClaseComponent } from './quinta-clase/quinta-clase.component';
import { SearchBoxComponent } from './quinta-clase/search-box/search-box.component';
import { SerachResultsComponent } from './quinta-clase/serach-results/serach-results.component';
import { ResumirTextoPipe } from './sexta-clase/resumir-texto.pipe';
import { NgContentComponent } from './septima-clase/ng-content/ng-content.component';
import { CardComponent } from './septima-clase/card/card.component';
import { ServiciosComponent } from './septima-clase/servicios/servicios.component';
import { FomularioComponent } from './septima-clase/fomulario/fomulario.component';
import { TablaComponent } from './septima-clase/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PerosnalCardComponent,
    DirectivasEstructuralesComponent,
    ListaComponent,
    PrimerasClasesComponent,
    QuintaClaseComponent,
    SearchBoxComponent,
    SerachResultsComponent,
    ResumirTextoPipe,
    NgContentComponent,
    CardComponent,
    ServiciosComponent,
    FomularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'primeras-clases', component: PrimerasClasesComponent },
      { path: 'quinta-clase', component: QuintaClaseComponent },
      { path: 'septima-clase', component: NgContentComponent },
      { path: 'servicios', component: ServiciosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
