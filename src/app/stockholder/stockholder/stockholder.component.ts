import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stockholder',
  templateUrl: './stockholder.component.html',
  styleUrls: ['./stockholder.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class StockholderComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor() {
    this.dataSource = new MatTableDataSource(STAKEHOLDER_DATA);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  columnsToDisplay = [
    'position',
    'code',
    'name',
    'registrationNumber',
    'issuedDate',
    'address',
    'phone',
    'email',
    'bankAccount',
    'bankName',
  ];
  dataSource: MatTableDataSource<Stakeholder>;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Stakeholder | null | undefined;
}
interface Stakeholder {
  position: number;
  code: string;
  name: string;
  registrationNumber: string;
  issuedDate: string;
  address: string;
  phone: string;
  email: string;
  bankAccount: string;
  bankName: string;
  securedDepository: number;
  unsecuredDepository: number;
}

const STAKEHOLDER_DATA: Stakeholder[] = [
  {
    position: 360,
    code: 'MFS00648',
    name: 'Đặng Thành Mỹ Duyên',
    registrationNumber: '075181000855',
    issuedDate: '27/02/2020',
    address: '156/16 Nguyễn Lâm, Phường 3, Quận Bình Thạnh, TP. HCM',
    phone: '0909290181/0901606366',
    email: 'dang.hienduyen81@gmail.com',
    bankAccount: '060060856764',
    bankName: 'Sacombank - CN Hồ Chí Minh',
    securedDepository: 1380,
    unsecuredDepository: 0,
  },
  {
    position: 590,
    code: 'MFS01019',
    name: 'Nguyễn Thị Lê Na',
    registrationNumber: '044183000076',
    issuedDate: '21/03/2016',
    address: 'số 605 Trương Công Định, phường 7, Tp Vũng Tàu',
    phone: '0907378580',
    email: '',
    bankAccount: '0081000466471',
    bankName: 'Vietcombank - CN Vũng Tàu',
    securedDepository: 138,
    unsecuredDepository: 0,
  },
];
