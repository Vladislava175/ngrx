import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'date', 'package', 'bill', 'paidUp', 'datePaidUp', 'number', 'check'];
  selection = new SelectionModel<any>(true, []);
  tableData = [{
    date: 'string',
    package: 'string',
    bill: 'string',
    paidUp: 'string',
    datePaidUp: 'string',
    number: 'string',
    check: 'string'
  }];
  dataSource = new MatTableDataSource<any>(this.tableData);
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
    this.paginator._intl.nextPageLabel = 'לעמוד הבא';
    this.paginator._intl.previousPageLabel = 'לעמוד הקודם';
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableData.forEach(row => this.selection.select(row));
  }

}
