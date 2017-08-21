// 3 things needs for all components
//
//  1. import statement in app.module.ts
//  2. Added to the declarations list in app.module.ts
//  3. place the child component in the parent as <task-list></task-list>

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'animal-list',
    templateUrl: "./app/animal-list.component.html"
})

export class AnimalListComponent {


// to get inputs to work you need to...
// 1. Add import Input from ang-core
// 2. Add a @Input() variable to component
// 3. Pass data from parent using <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    @Input() childAnimalList: Animal[];

//to get outputs to work you need to...
// 1. Import Output and EventEmitter from ang-core
// 2. Create and instantiate and @Output eventSender object
// 3. call the .emit method on the eventSender object for each action you want to pass
// 4. add (clickSender)="editTask($event)" to the child component bracket item in the parents template.

    @Output() clickSender = new EventEmitter();

    //used by task filter component
    // filterByCompleteness: string = "incompleteTasks"
    //
    // toggleDone(clickedAnimal: Animal, setAge: boolean) {
    //     clickedAnimal.age = setAge;
    // }
    //
    // onChange(optionFromMenu) {
    //     this.filterByCompleteness = optionFromMenu;
    // }

    editButtonHasBeenClicked(animalToEdit: Animal) {
        this.clickSender.emit(animalToEdit);
    }

    priorityColor(currentAnimal: Animal){
        if (currentAnimal.age < 2){
            return "bg-info";
        } else {
            return "bg-warning";
        }
    }

    filterByAge: string = "allAnimals";

    onChange(optionFromMenu){
        this.filterByAge = optionFromMenu;
    }

}
