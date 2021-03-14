import { Category } from "./categories";

export class BudgetTemplate {
  name: string;
  budgetTotalAmount: number;
  budgetCurrentOutGoing: number;
  budgetOverflow: number;
  categories: Category[];
  constructor() {
    this.name = "";
    this.budgetTotalAmount = 0;
    this.budgetCurrentOutGoing = 0;
    this.budgetOverflow = 0;
    this.categories = [];
  }
}
