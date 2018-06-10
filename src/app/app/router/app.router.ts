import { Routes, RouterModule } from '@angular/router'
import { CardComponent } from "../components/card/card.component"
import { AppComponent } from '../../app.component';
import { HomeComponent } from "../components/home-component/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'game',
        component: CardComponent
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);