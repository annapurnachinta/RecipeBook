import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(nameInput: HTMLInputElement){
    const newName = this.nameInputRef.nativeElement.value;
    const newAmonut = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newName,newAmonut);
    this.slService .addIngredient(newIngredient)
  }

}
