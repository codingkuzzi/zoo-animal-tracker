import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'new-animal',
    template: `
<div>
  <h1>Enter a new animal</h1>
  <br>
  <label>Species</label>
  <input class="form-control" #species>
  <br>
  <label>Name</label>
  <input class="form-control" #name>
  <br>
  <label>Age</label>
  <input class="form-control" #age>
  <br>
  <label>Diet</label>
  <input class="form-control" #diet>
  <br>
  <label>Location</label>
  <input class="form-control" #location>
  <br>
  <label>Number of Caretakers</label>
  <input class="form-control" #caretakers>
  <br>
  <label>Sex</label>
  <input class="form-control" #sex>
  <br>
  <label> Animal's Likes</label>
  <input class="form-control" #likes>
  <br>
  <label> Animal's Dislikes</label>
  <input class="form-control" #dislikes>
  <br>
  <button (click)="submitForm(species.value, name.species, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Submit</button>
</div>
  `
})

export class NewAnimalComponent{
    // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
        let newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
        this.newAnimalSender.emit(newAnimal);
    }

}