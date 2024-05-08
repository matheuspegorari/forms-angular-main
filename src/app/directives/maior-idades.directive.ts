import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';

@Directive({
    selector: '[maiorIdadeValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaiorIdadesDirective,
            multi: true,
        },
    ],
})
export class MaiorIdadesDirective implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        const dataNascimento = control.value;
        const anoNascimento = new Date(dataNascimento).getFullYear();
        const AnoNascMais18 = anoNascimento + 18;
        const anoAtual = new Date().getFullYear();

        const ehMaior = AnoNascMais18 <= anoAtual;

        if (ehMaior) {
            return null;
        }
        return { maiorIdadeValidator: true };
    }
}
