import { Ingredient } from './../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // removed in handling form
  // @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem : Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  // removed in handling form

  // onAddItem(nameInput: HTMLInputElement){
  //   const newName = this.nameInputRef.nativeElement.value;
  //   const newAmonut = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(newName,newAmonut);
  //   this.slService .addIngredient(newIngredient)
  // }

  onAddItem(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    }else{
      this.slService.addIngredient(newIngredient)
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
