import { DatePipe } from '@angular/common';
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
    DatePipe,
  ],
  templateUrl: './listquestion.component.html',
  styleUrl: './listquestion.component.scss'
})



export class ListquestionComponent {
  searchName = '';
  begintime!: string;  // 會是 "2025-09-17"
  endtime!: string;


  constructor(private router: Router) { }


  displayedColumns: string[] = ['position', 'name', 'stage', 'begintime', 'endtime', 'result'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //等畫面渲染完後 再將切換頁面的套件  塞進去TABLE的套件內使用
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openForm() {

    // 假設跳轉到 /form/:id

    this.router.navigate(['/questionnaire']);

    // 你可以做以下幾種選擇：
    // 1. 導到新的路由，例如 /form/:id
    // 2. 打開一個 Angular Material Dialog，把 row 當作資料傳進去
    // 3. 在下方顯示一個可編輯的 form
  }
  openResult() {
    this.router.navigate(['/']);

  }

  applyFilters() {
    const qName = (this.searchName || '').trim().toLowerCase();

    // 先把 ngModel 取得的字串轉為 Date（或 null）
    const qStart = parseDateStart(this.begintime as unknown as string);
    const qEnd = parseDateEnd(this.endtime as unknown as string);

    const startTs = qStart ? qStart.getTime() : null;
    const endTs = qEnd ? qEnd.getTime() : null;

    const filtered = ELEMENT_DATA.filter(item => {
      // 名稱過濾（若沒輸入就不過濾）
      const nameOk = !qName || item.name.toLowerCase().includes(qName);

      // 日期過濾（重疊邏輯）
      // itemTsStart <= queryEnd && itemTsEnd >= queryStart
      const itemStart = item.begintime.getTime();
      const itemEnd = item.endtime.getTime();

      let dateOk = true;
      if (startTs && endTs) {
        dateOk = (itemStart <= endTs) && (itemEnd >= startTs);
      } else if (startTs) {
        dateOk = itemEnd >= startTs;
      } else if (endTs) {
        dateOk = itemStart <= endTs;
      } // else 都沒填 -> dateOk = true

      return nameOk && dateOk;
    });

    this.dataSource.data = filtered;
  }


}
export interface PeriodicElement {
  name: string;
  position: number;
  stage: string;
  begintime: Date;
  endtime: Date;
  result: string;
}

/** 將 yyyy-MM-dd 字串轉成當地日之開始（00:00:00.000）或結束（23:59:59.999） */
function parseDateStart(dateStr?: string | null): Date | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);       // browser 會用 local timezone for 'YYYY-MM-DD'
  d.setHours(0, 0, 0, 0);
  return d;
}
function parseDateEnd(dateStr?: string | null): Date | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  d.setHours(23, 59, 59, 999);
  return d;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', stage: 'Run', begintime: new Date(2025, 8, 3), endtime: new Date(2025, 8, 10), result: 'H' },
  { position: 2, name: 'Helium', stage: 'End', begintime: new Date(2025, 8, 6), endtime: new Date(2025, 8, 10), result: 'He' },
  { position: 3, name: 'Lithium', stage: 'End', begintime: new Date(2025, 8, 7), endtime: new Date(2025, 8, 10), result: 'Li' },
  { position: 4, name: 'Beryllium', stage: 'End', begintime: new Date(2025, 8, 8), endtime: new Date(2025, 8, 15), result: 'Be' },
  { position: 5, name: 'Boron', stage: 'End', begintime: new Date(2025, 8, 9), endtime: new Date(2025, 8, 15), result: 'B' },
  { position: 6, name: 'Carbon', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 15), result: 'C' },
  { position: 7, name: 'Nitrogen', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 20), result: 'N' },
  { position: 8, name: 'Oxygen', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 20), result: 'O' },
  { position: 9, name: 'Fluorine', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 20), result: 'F' },
  { position: 10, name: 'Neon', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 20), result: 'Ne' },
  { position: 11, name: 'Sodium', stage: 'End', begintime: new Date(2025, 8, 11), endtime: new Date(2025, 8, 20), result: 'Na' },
  { position: 12, name: 'Magnesium', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 20), result: 'Mg' },
  { position: 13, name: 'Aluminum', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 20), result: 'Al' },
  { position: 14, name: 'Silicon', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 25), result: 'Si' },
  { position: 15, name: 'Phosphorus', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 25), result: 'P' },
  { position: 16, name: 'Sulfur', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 25), result: 'S' },
  { position: 17, name: 'Chlorine', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 28), result: 'Cl' },
  { position: 18, name: 'Argon', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 28), result: 'Ar' },
  { position: 19, name: 'Potassium', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 28), result: 'K' },
  { position: 20, name: 'Calcium', stage: 'End', begintime: new Date(2025, 8, 19), endtime: new Date(2025, 8, 30), result: 'Ca' },
];
