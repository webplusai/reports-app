import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  private router = inject(Router);

  menuItems = [
    { label: 'Forms', route: '/forms', icon: '/assets/icons/icon-forms.svg' },
    { label: 'Customers', route: '/customers', icon: '/assets/icons/icon-customers.svg' },
    { label: 'Submissions', route: '/submissions', icon: '/assets/icons/icon-submissions.svg' },
    { label: 'History', route: '/history', icon: '/assets/icons/icon-history.svg' },
    { label: 'Reports', route: '/reports', icon: '/assets/icons/icon-reports.svg' },
    { label: 'Workflow', route: '/workflow', icon: '/assets/icons/icon-workflow.svg' }
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
