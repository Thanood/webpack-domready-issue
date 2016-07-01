import {customAttribute} from 'aurelia-framework';

@customAttribute('custom-attr')
export class CustomAttr {
    attached() {
        console.log('custom-attr.attached');
    }
}
