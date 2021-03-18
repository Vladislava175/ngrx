import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'sale', 'cash', 'validity', 'completed', 'status'];
  selection = new SelectionModel<any>(true, []);
  tableData = [{
    name: 'string',
    sale: 'string',
    cash: 'string',
    validity: 'string',
    completed: 'string',
    status: 'string'
  }];
  dataSource = new MatTableDataSource<any>(this.tableData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;

  constructor() {
  }

  ngOnInit(): void {
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

  openDialog() {

  }
}
