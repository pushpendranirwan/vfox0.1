import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-services/auth-guard-service';
import { DashboardComponent } from './dashboard.component';
import { ServiceCenterComponent } from './service-center/service-center.component';


const routes: Routes = [
   {
    path: '',
    component: DashboardComponent,  
    pathMatch:'full',
    data: {
      title: 'Dashboard'
    }
  },
  {
      path: 'servicecenter',
      component: ServiceCenterComponent,
      data: {
      title: 'Service Center'
     }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
