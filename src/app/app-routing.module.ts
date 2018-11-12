import { McmaklerComponent } from "./mcmakler/mcmakler.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: McmaklerComponent },
    { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);