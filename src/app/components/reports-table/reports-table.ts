import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ReportsService } from '../../shared/services/reports';
import { Report } from '../../shared/models/report';
import { DeleteModalComponent } from '../delete-modal/delete-modal';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.html',
  styleUrls: ['./reports-table.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, DeleteModalComponent]
})
export class ReportsTableComponent implements OnInit, OnDestroy {
  reports: Report[] = [];
  filteredReports: Report[] = [];
  searchTerm = '';
  sortBy = 'newest';
  currentPage = 0;
  pageSize = 5;
  totalItems = 0;
  selectedRowIndex = 0;
  showDeleteModal = false;
  reportToDelete: Report | null = null;
  
  private destroy$ = new Subject<void>();
  private reportsService = inject(ReportsService);

  ngOnInit(): void {
    this.reportsService.getReports()
      .pipe(takeUntil(this.destroy$))
      .subscribe(reports => {
        this.reports = reports;
        this.filteredReports = reports;
        this.totalItems = reports.length;
        this.updateDisplayedReports();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(): void {
    this.reportsService.filterReports(this.searchTerm);
    this.currentPage = 0;
  }

  onSort(): void {
    this.reportsService.sortReports(this.sortBy);
    this.currentPage = 0;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedReports();
  }

  deleteReport(report: Report): void {
    this.reportToDelete = report;
    this.showDeleteModal = true;
  }

  onDeleteConfirm(): void {
    if (this.reportToDelete) {
      this.reportsService.deleteReport(this.reportToDelete.id);
      this.showDeleteModal = false;
      this.reportToDelete = null;
    }
  }

  onDeleteCancel(): void {
    this.showDeleteModal = false;
    this.reportToDelete = null;
  }

  selectRow(index: number): void {
    this.selectedRowIndex = index;
  }

  private updateDisplayedReports(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredReports = this.reports.slice(startIndex, endIndex);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getPageInfo(): string {
    const start = this.currentPage * this.pageSize + 1;
    const end = Math.min((this.currentPage + 1) * this.pageSize, this.totalItems);
    return `${start}-${end} of ${this.totalItems} History Records`;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const currentPage = this.currentPage;
    const pages: number[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(2);
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(2);
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages - 1);
        pages.push(totalPages);
      }
    }
    
    return pages;
  }
}
