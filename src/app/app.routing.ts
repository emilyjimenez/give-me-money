import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { FundFormComponent } from './fund-form/fund-form.component';
import { AdminComponent } from './admin/admin.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new-project',
    component: NewProjectFormComponent
  },
  {
    path: 'fund',
    component: FundFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
