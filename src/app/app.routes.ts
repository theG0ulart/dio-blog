import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "/home", component: HomeComponent},
    {path: "/feed", component: FeedComponent},
    {path: "/contact", component: ContactComponent}
];
