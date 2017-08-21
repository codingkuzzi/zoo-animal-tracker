import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'edit-animal',
    template: `
    <div *ngIf="childSelectedAnimal">
      <h1>Edit the animal:</h1>
      <br>
      <label> Species</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <br>
      <label> Name</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <label> Age</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <label> Diet</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <br>
      <label>Location</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <br>
      <label>Number of Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <br>
      <label> Sex</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <br>
      <label> Animal's Likes</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <br>
      <label> Animal's Dislikes</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <br>
      <button (click)="doneButtonClicked()">Update</button>
    </div>
  `
})
export class EditAnimalComponent{
    @Input() childSelectedAnimal: Animal;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked(){
        this.doneButtonClickedSender.emit();
    }
}
