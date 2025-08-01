import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private reports: Report[] = [
    {
      id: '1',
      name: 'Test Report',
      createdAt: new Date('2020-12-24'),
      modifiedAt: new Date('2020-12-24'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Billing Chilling Regular Form',
      description: 'Test report description'
    },
    {
      id: '2',
      name: 'Test Report 2',
      createdAt: new Date('2020-12-23'),
      modifiedAt: new Date('2020-12-23'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Billing Chilling Regular Form',
      description: 'Test report 2 description'
    },
    {
      id: '3',
      name: 'SAWG Install Report',
      createdAt: new Date('2020-12-22'),
      modifiedAt: new Date('2020-12-22'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'SAWG Install Form',
      description: 'SAWG installation report'
    },
    {
      id: '4',
      name: 'Five and Ambulance for Wood Buffalo',
      createdAt: new Date('2020-12-21'),
      modifiedAt: new Date('2020-12-21'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Fire and Ambulance Form',
      description: 'Fire and ambulance services report'
    },
    {
      id: '5',
      name: 'Test Report 3',
      createdAt: new Date('2020-12-20'),
      modifiedAt: new Date('2020-12-20'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Billing Chilling Regular Form',
      description: 'Test report 3 description'
    },
    {
      id: '6',
      name: 'Monthly Sales Report',
      createdAt: new Date('2020-12-19'),
      modifiedAt: new Date('2020-12-19'),
      owner: 'John Smith',
      associatedForm: 'Sales Form A',
      description: 'Monthly sales performance analysis'
    },
    {
      id: '7',
      name: 'Customer Feedback Summary',
      createdAt: new Date('2020-12-18'),
      modifiedAt: new Date('2020-12-18'),
      owner: 'Sarah Johnson',
      associatedForm: 'Feedback Form B',
      description: 'Customer satisfaction metrics'
    },
    {
      id: '8',
      name: 'Inventory Status Report',
      createdAt: new Date('2020-12-17'),
      modifiedAt: new Date('2020-12-17'),
      owner: 'Mike Wilson',
      associatedForm: 'Inventory Form C',
      description: 'Current inventory levels and trends'
    },
    {
      id: '9',
      name: 'Employee Performance Review',
      createdAt: new Date('2020-12-16'),
      modifiedAt: new Date('2020-12-16'),
      owner: 'Lisa Davis',
      associatedForm: 'HR Form D',
      description: 'Quarterly employee performance metrics'
    },
    {
      id: '10',
      name: 'Marketing Campaign Results',
      createdAt: new Date('2020-12-15'),
      modifiedAt: new Date('2020-12-15'),
      owner: 'David Brown',
      associatedForm: 'Marketing Form E',
      description: 'Campaign effectiveness analysis'
    },
    {
      id: '11',
      name: 'Financial Quarterly Report',
      createdAt: new Date('2020-12-14'),
      modifiedAt: new Date('2020-12-14'),
      owner: 'Emma Wilson',
      associatedForm: 'Finance Form F',
      description: 'Q4 financial performance summary'
    },
    {
      id: '12',
      name: 'Product Quality Metrics',
      createdAt: new Date('2020-12-13'),
      modifiedAt: new Date('2020-12-13'),
      owner: 'Alex Thompson',
      associatedForm: 'Quality Form G',
      description: 'Product quality and defect tracking'
    },
    {
      id: '13',
      name: 'Customer Support Tickets',
      createdAt: new Date('2020-12-12'),
      modifiedAt: new Date('2020-12-12'),
      owner: 'Rachel Green',
      associatedForm: 'Support Form H',
      description: 'Support ticket resolution metrics'
    },
    {
      id: '14',
      name: 'Website Analytics Report',
      createdAt: new Date('2020-12-11'),
      modifiedAt: new Date('2020-12-11'),
      owner: 'Tom Anderson',
      associatedForm: 'Analytics Form I',
      description: 'Website traffic and user behavior'
    },
    {
      id: '15',
      name: 'Supplier Performance Review',
      createdAt: new Date('2020-12-10'),
      modifiedAt: new Date('2020-12-10'),
      owner: 'Maria Garcia',
      associatedForm: 'Procurement Form J',
      description: 'Supplier evaluation and performance'
    },
    {
      id: '16',
      name: 'Quarterly Financial Analysis',
      createdAt: new Date('2020-12-09'),
      modifiedAt: new Date('2020-12-09'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Financial Analysis Form',
      description: 'Q4 financial performance analysis'
    },
    {
      id: '17',
      name: 'Customer Satisfaction Survey',
      createdAt: new Date('2020-12-08'),
      modifiedAt: new Date('2020-12-08'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Customer Survey Form',
      description: 'Customer satisfaction metrics'
    },
    {
      id: '18',
      name: 'Employee Training Report',
      createdAt: new Date('2020-12-07'),
      modifiedAt: new Date('2020-12-07'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Training Assessment Form',
      description: 'Employee training completion status'
    },
    {
      id: '19',
      name: 'Marketing ROI Analysis',
      createdAt: new Date('2020-12-06'),
      modifiedAt: new Date('2020-12-06'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Marketing ROI Form',
      description: 'Marketing campaign return on investment'
    },
    {
      id: '20',
      name: 'Inventory Management Report',
      createdAt: new Date('2020-12-05'),
      modifiedAt: new Date('2020-12-05'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Inventory Management Form',
      description: 'Current inventory levels and trends'
    },
    {
      id: '21',
      name: 'Quality Control Metrics',
      createdAt: new Date('2020-12-04'),
      modifiedAt: new Date('2020-12-04'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Quality Control Form',
      description: 'Product quality and defect tracking'
    },
    {
      id: '22',
      name: 'Sales Pipeline Report',
      createdAt: new Date('2020-12-03'),
      modifiedAt: new Date('2020-12-03'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Sales Pipeline Form',
      description: 'Sales pipeline and conversion rates'
    },
    {
      id: '23',
      name: 'Customer Support Metrics',
      createdAt: new Date('2020-12-02'),
      modifiedAt: new Date('2020-12-02'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Support Metrics Form',
      description: 'Support ticket resolution metrics'
    },
    {
      id: '24',
      name: 'Website Performance Report',
      createdAt: new Date('2020-12-01'),
      modifiedAt: new Date('2020-12-01'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Website Analytics Form',
      description: 'Website traffic and user behavior'
    },
    {
      id: '25',
      name: 'Budget Planning Report',
      createdAt: new Date('2020-11-30'),
      modifiedAt: new Date('2020-11-30'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Budget Planning Form',
      description: 'Annual budget planning and allocation'
    },
    {
      id: '26',
      name: 'Risk Assessment Report',
      createdAt: new Date('2020-11-29'),
      modifiedAt: new Date('2020-11-29'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Risk Assessment Form',
      description: 'Risk evaluation and mitigation strategies'
    },
    {
      id: '27',
      name: 'Compliance Audit Report',
      createdAt: new Date('2020-11-28'),
      modifiedAt: new Date('2020-11-28'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Compliance Audit Form',
      description: 'Regulatory compliance audit results'
    },
    {
      id: '28',
      name: 'Performance Metrics Dashboard',
      createdAt: new Date('2020-11-27'),
      modifiedAt: new Date('2020-11-27'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Performance Dashboard Form',
      description: 'Key performance indicators summary'
    },
    {
      id: '29',
      name: 'Resource Allocation Report',
      createdAt: new Date('2020-11-26'),
      modifiedAt: new Date('2020-11-26'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Resource Allocation Form',
      description: 'Resource allocation and utilization'
    },
    {
      id: '30',
      name: 'Strategic Planning Report',
      createdAt: new Date('2020-11-25'),
      modifiedAt: new Date('2020-11-25'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Strategic Planning Form',
      description: 'Strategic planning and objectives'
    },
    {
      id: '31',
      name: 'Market Analysis Report',
      createdAt: new Date('2020-11-24'),
      modifiedAt: new Date('2020-11-24'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Market Analysis Form',
      description: 'Market trends and competitive analysis'
    },
    {
      id: '32',
      name: 'Product Development Report',
      createdAt: new Date('2020-11-23'),
      modifiedAt: new Date('2020-11-23'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Product Development Form',
      description: 'Product development progress and milestones'
    },
    {
      id: '33',
      name: 'Customer Retention Report',
      createdAt: new Date('2020-11-22'),
      modifiedAt: new Date('2020-11-22'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Customer Retention Form',
      description: 'Customer retention and loyalty metrics'
    },
    {
      id: '34',
      name: 'Operational Efficiency Report',
      createdAt: new Date('2020-11-21'),
      modifiedAt: new Date('2020-11-21'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Operational Efficiency Form',
      description: 'Operational efficiency and process optimization'
    },
    {
      id: '35',
      name: 'Annual Review Report',
      createdAt: new Date('2020-11-20'),
      modifiedAt: new Date('2020-11-20'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Annual Review Form',
      description: 'Annual performance and strategic review'
    },
    {
      id: '36',
      name: 'Technology Infrastructure Report',
      createdAt: new Date('2020-11-19'),
      modifiedAt: new Date('2020-11-19'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Technology Infrastructure Form',
      description: 'IT infrastructure and system performance'
    },
    {
      id: '37',
      name: 'Customer Acquisition Report',
      createdAt: new Date('2020-11-18'),
      modifiedAt: new Date('2020-11-18'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Customer Acquisition Form',
      description: 'New customer acquisition metrics'
    },
    {
      id: '38',
      name: 'Product Quality Assurance',
      createdAt: new Date('2020-11-17'),
      modifiedAt: new Date('2020-11-17'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Quality Assurance Form',
      description: 'Product quality and testing results'
    },
    {
      id: '39',
      name: 'Financial Forecasting Report',
      createdAt: new Date('2020-11-16'),
      modifiedAt: new Date('2020-11-16'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Financial Forecasting Form',
      description: 'Financial projections and forecasting'
    },
    {
      id: '40',
      name: 'Employee Engagement Survey',
      createdAt: new Date('2020-11-15'),
      modifiedAt: new Date('2020-11-15'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Employee Engagement Form',
      description: 'Employee satisfaction and engagement metrics'
    },
    {
      id: '41',
      name: 'Supply Chain Analysis',
      createdAt: new Date('2020-11-14'),
      modifiedAt: new Date('2020-11-14'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Supply Chain Form',
      description: 'Supply chain efficiency and optimization'
    },
    {
      id: '42',
      name: 'Digital Marketing Report',
      createdAt: new Date('2020-11-13'),
      modifiedAt: new Date('2020-11-13'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Digital Marketing Form',
      description: 'Digital marketing campaign performance'
    },
    {
      id: '43',
      name: 'Customer Service Metrics',
      createdAt: new Date('2020-11-12'),
      modifiedAt: new Date('2020-11-12'),
      owner: 'zendumademo-trax@zenduit.com',
      associatedForm: 'Customer Service Form',
      description: 'Customer service quality and response times'
    }
  ];

  private filteredReportsSubject = new BehaviorSubject<Report[]>(this.reports);
  public filteredReports$ = this.filteredReportsSubject.asObservable();

  getReports(): Observable<Report[]> {
    return this.filteredReports$;
  }

  getAllReports(): Report[] {
    return [...this.reports];
  }

  filterReports(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredReportsSubject.next([...this.reports]);
      return;
    }

    const filtered = this.reports.filter(report =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.associatedForm.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.filteredReportsSubject.next(filtered);
  }

  sortReports(sortBy: string): void {
    const currentReports = this.filteredReportsSubject.value;
    let sorted: Report[];

    switch (sortBy) {
      case 'newest':
        sorted = [...currentReports].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
      case 'oldest':
        sorted = [...currentReports].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case 'name':
        sorted = [...currentReports].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'owner':
        sorted = [...currentReports].sort((a, b) => a.owner.localeCompare(b.owner));
        break;
      default:
        sorted = [...currentReports];
    }

    this.filteredReportsSubject.next(sorted);
  }

  deleteReport(id: string): void {
    this.reports = this.reports.filter(report => report.id !== id);
    this.filteredReportsSubject.next([...this.reports]);
  }

  addReport(report: Omit<Report, 'id'>): void {
    const newReport: Report = {
      ...report,
      id: Date.now().toString()
    };
    this.reports.unshift(newReport);
    this.filteredReportsSubject.next([...this.reports]);
  }
}
