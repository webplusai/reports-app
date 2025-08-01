import { Routes } from '@angular/router';
import { Forms } from './pages/forms/forms';
import { Customers } from './pages/customers/customers';
import { Submissions } from './pages/submissions/submissions';
import { History } from './pages/history/history';
import { Reports } from './pages/reports/reports';
import { Workflow } from './pages/workflow/workflow';

export const routes: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { path: 'forms', component: Forms },
  { path: 'customers', component: Customers },
  { path: 'submissions', component: Submissions },
  { path: 'history', component: History },
  { path: 'reports', component: Reports },
  { path: 'workflow', component: Workflow }
];
