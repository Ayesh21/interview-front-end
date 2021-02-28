import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../../services/calculator-service/calculator.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ICalculatorResponse} from '../../modules/calculator/ICalculatorResponse';
import {ICalculatorRequest} from '../../modules/calculator/ICalculatorRequest';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '', weight: 1}
];
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  calculatorForm: FormGroup;
  public calculatorResponse: ICalculatorResponse;
  public calculatorRequest: ICalculatorRequest[];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor(private calculatorService: CalculatorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      qtyPenguinUnit: ['', []],
      qtyPenguinCarton: ['', []],
      qtyHorseUnit: ['', []],
      qtyHorseCarton : ['', []],
      totalValue:  ['', []]
    });
  }

  onSubmit(){
    this.calculatorRequest = [];
    const prodPenguin: ICalculatorRequest = {
      type: 1,
      unitQuantity: this.calculatorForm.value.qtyPenguinUnit,
      cartonQuantity: this.calculatorForm.value.qtyPenguinCarton
    };
    const prodHorseShoes: ICalculatorRequest = {
      type: 2,
      unitQuantity: this.calculatorForm.value.qtyHorseUnit,
      cartonQuantity: this.calculatorForm.value.qtyHorseCarton
    };

    this.calculatorRequest.push(prodPenguin);
    this.calculatorRequest.push(prodHorseShoes);
    console.log('this.calculatorRequest : ', this.calculatorRequest);

    this.calculatorService.calculateAmount(this.calculatorRequest)
      .subscribe(data => {
        this.calculatorResponse = data;
        console.log('this : ', this.calculatorResponse.totalPrice);
        this.calculatorForm.controls.totalValue.setValue('Total:   Rs. ' + this.calculatorResponse.totalPrice);
      });

  }

}
