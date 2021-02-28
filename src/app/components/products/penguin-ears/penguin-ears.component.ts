import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product-service/product.service';
import {IProduct} from '../../../modules/product/IProduct';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface PenguinEars {
  id: string;
  name: string;
  quantity: string;
  amount: string;
}

@Component({
  selector: 'app-penguin-ears',
  templateUrl: './penguin-ears.component.html',
  styleUrls: ['./penguin-ears.component.css']
})
export class PenguinEarsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'quantity', 'amount'];
  dataSource: MatTableDataSource<PenguinEars>;

  penguinEarsList: Array<IProduct> = [];
  private transformedPenguinEarsList = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllPenguinEars().subscribe(data => {

        this.penguinEarsList = data.productList;
        console.log("response ->",this.penguinEarsList)
        let index = 0;

        this.penguinEarsList.forEach(val => {

          console.log('penguinEars : ', val);
          index++;
          const penguinEar = {
            id: index,
            name: 'Penguin Ears',
            quantity: val.quantity,
            value: val.value
          };
          this.transformedPenguinEarsList.push(penguinEar);
        });
      this.dataSource = new MatTableDataSource(this.transformedPenguinEarsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });

    console.log('this : ', this.penguinEarsList);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
