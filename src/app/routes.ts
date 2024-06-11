import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
   {
      path: 'client',
      component: ClientComponent,
      title: 'Client page'
    },
    {
      path: 'meeting',
      component: MeetingComponent,
      title: 'Meeting details'
    }
  ];
  
  export default routeConfig;