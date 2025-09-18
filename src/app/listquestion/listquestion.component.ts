import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listquestion',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss'
})



export class ListquestionComponent {
  nametietle !: string;

  constructor(private router: Router) { }


  displayedColumns: string[] = ['position', 'name', 'stage', 'begintime', 'endtime', 'result'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //等畫面渲染完後 再將切換頁面的套件  塞進去TABLE的套件內使用
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openForm(row: any) {

    // 假設跳轉到 /form/:id

    this.router.navigate(['/questionnaire']);

    // 你可以做以下幾種選擇：
    // 1. 導到新的路由，例如 /form/:id
    // 2. 打開一個 Angular Material Dialog，把 row 當作資料傳進去
    // 3. 在下方顯示一個可編輯的 form
  }

  Searchdata() {

    // this.dataSource.data
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  stage: string;
  begintime: string;
  endtime: string;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', stage: 'Run', begintime: '2025/09/11', endtime: '2025/09/20', result: 'H' },
  { position: 2, name: 'Helium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'He' },
  { position: 3, name: 'Lithium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Li' },
  { position: 4, name: 'Beryllium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Be' },
  { position: 5, name: 'Boron', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'B' },
  { position: 6, name: 'Carbon', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'C' },
  { position: 7, name: 'Nitrogen', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'N' },
  { position: 8, name: 'Oxygen', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'O' },
  { position: 9, name: 'Fluorine', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'F' },
  { position: 10, name: 'Neon', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Ne' },
  { position: 11, name: 'Sodium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Na' },
  { position: 12, name: 'Magnesium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Mg' },
  { position: 13, name: 'Aluminum', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Al' },
  { position: 14, name: 'Silicon', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Si' },
  { position: 15, name: 'Phosphorus', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'P' },
  { position: 16, name: 'Sulfur', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'S' },
  { position: 17, name: 'Chlorine', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Cl' },
  { position: 18, name: 'Argon', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Ar' },
  { position: 19, name: 'Potassium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'K' },
  { position: 20, name: 'Calcium', stage: 'End', begintime: '2025/09/11', endtime: '2025/09/20', result: 'Ca' },
];
