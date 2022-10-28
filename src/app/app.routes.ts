import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

//On met toutes les routes de nos composants pour qu'ils s'affichent.
//Par contre on ne gère pas dans le router les éléments permanents comme
//header et footer
const ROUTES: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'user', component: UserComponent}
]
export { ROUTES };