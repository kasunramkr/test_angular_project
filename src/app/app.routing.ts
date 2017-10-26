import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UserComponent} from './component/user.component';
import { AboutComponent} from './component/about.component';
import { ContactComponent} from './component/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
