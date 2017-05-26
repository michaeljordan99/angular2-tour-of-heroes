import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero/detail/hero-detail.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);
