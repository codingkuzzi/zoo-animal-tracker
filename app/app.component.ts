import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'app-root',
    templateUrl: "./app/app.component.html"
})

export class AppComponent {

    selectedAnimal: Animal = null;

    masterAnimalList: Animal[] = [
        new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
        new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
        new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 1, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
    ];


    finishedEditing() {
        this.selectedAnimal = null;
    }

    editAnimal(clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    }

    addAnimal(newAnimalFromChild: Animal) {
        this.masterAnimalList.push(newAnimalFromChild);
    }

} // end of Appconponent
