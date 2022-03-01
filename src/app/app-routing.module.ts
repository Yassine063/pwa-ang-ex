import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TempConversionComponent } from './components/temp-conversion/temp-conversion.component';
import { DistanceConversionComponent } from './components/distance-conversion/distance-conversion.component';




const routes: Routes = [
  {path: 'temperature', component: TempConversionComponent},
  {path: 'distance', component: DistanceConversionComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
