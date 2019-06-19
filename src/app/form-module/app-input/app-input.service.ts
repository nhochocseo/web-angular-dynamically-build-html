import { Injectable } from '@angular/core';
import { InputTypeTextComponent } from './input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from './input-type-select/input-type-select.component';
import { InputTypeDateComponent } from './input-type-date/input-type-date.component';
import { InputTypePasswordComponent } from './input-type-password/input-type-password.component';
import { InputTypeSelectTowComponent } from './input-type-select-drop-tow/input-type-select.component';

@Injectable()
export class DynamicInputService {

    constructor() { }

    getInputComponentByType(type: any): any {
        // debugger;
        let component;
        switch (type) {
            case 'select':
                component = InputTypeSelectComponent;
                break;
            case 'date':
                component = InputTypeDateComponent;
                break;
            case 'password':
            component = InputTypePasswordComponent;
                break;
            case 'selecttow':
            component = InputTypeSelectTowComponent;
            break;
            default:
                component = InputTypeTextComponent;
                break;
        }

        return component;
    }
}
