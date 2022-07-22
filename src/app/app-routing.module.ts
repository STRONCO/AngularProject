import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MainComponent } from './admin/main/main.component';
import { AuthGuard } from './guard/auth.guard';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes:Routes =[
  {
    path: "home", component: HomeComponent, title:"Home"
  },
  {
    path: "admin", component: MainComponent, title:"Admin", canActivate: [ AuthGuard ]
  },
  {
    path: "posts", component: PostsComponent, title:"Posts",
  },
  {
    path: "comments/:id", component: CommentsComponent, title:"Comments",
  },
  {
    path: "about", component: AboutComponent, title:"About"
  },
  {
    path: "dashboard", component: DashboardComponent, title:"Dashboard"
  },
  {
    path: "maintenance", component: MaintenanceComponent, title:"Maintenance"
  },
  {
    path: "login", component: LoginComponent, title:"Login"
  },
  {
    path: '',pathMatch: 'full', redirectTo:'/home'
  },
  {
    path: '**', component:NotfoundComponent, title:"Not found"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
