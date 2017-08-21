import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
    name: "age",
    pure: false
})

export class AgePipe implements PipeTransform {
    transform(input: Animal[], desiredAge){
        let output: Animal[]=[];
        if(desiredAge === "gtoe2"){
            for(let i = 0; i < input.length; i++){
                if(input[i].age >= 2){
                    output.push(input[i]);
                }
            }
            return output;
        } else if(desiredAge === "lt2"){
            for(let i = 0; i < input.length; i++){
                if(input[i].age < 2){
                    output.push(input[i]);
                }
            }
            return output;
        } else {
            return input;
        }
    }
}