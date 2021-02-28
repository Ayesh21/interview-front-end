import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product-service/product.service';
import {IProduct} from '../../../modules/product/IProduct';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface HorseShoes {
  id: string;
  name: string;
  quantity: string;
  amount: string;
}

@Component({
  selector: 'app-horse-shoes',
  templateUrl: './horse-shoes.component.html',
  styleUrls: ['./horse-shoes.component.css']
})
export class HorseShoesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'quantity', 'amount'];
  dataSource: MatTableDataSource<HorseShoes>;

  horseShoesList: Array<IProduct> = [];
  private transformedHorseShoesList = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllHorseShoes()
      .subscribe(data => {
        this.horseShoesList = data.productList;
        let index = 0;

        this.horseShoesList.forEach(val => {
          index++;
          const horseShoe = {
            id: index,
            name: 'Horse Shoes',
            quantity: val.quantity,
            value: val.value
          };
          this.transformedHorseShoesList.push(horseShoe);
        });
        this.dataSource = new MatTableDataSource(this.transformedHorseShoesList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
