import { Component } from '@angular/core';

@Component({
    selector: 'calculator-component',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    monthlyIncome: number = 100000;
    minIncome: number = 100000;
    maxIncome: number = 300000;
    monthlyExpense: number = 0;
    minExpense: number = 0;
    maxExpense: number = 100000;
    tenurePeriod: string = "6 Months"
    tenurePeriods: Array<string> = ["3 Months", "6 Months", "12 Months"];
    emi: number = 15000;
}