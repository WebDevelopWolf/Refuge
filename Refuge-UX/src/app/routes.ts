import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { StudioComponent } from './studio/studio.component';
import { DossierComponent } from './dossier/dossier.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'learn-more', component: LearnMoreComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'studio', component: StudioComponent },
            { path: 'dossier', component: DossierComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
