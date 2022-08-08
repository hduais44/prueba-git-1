import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name:"mayusculas"
    }
)
export class mayusculasPipe implements PipeTransform
{
    transform(texto:string,enmayusculas:boolean=true):string{
        // if(enmayusculas)
        // {
        //     return texto.toUpperCase();
        // }
        // else
        // {
        //     return texto.toLowerCase();
        // }
        return (enmayusculas)? texto.toUpperCase():texto.toLowerCase();
    }

}
