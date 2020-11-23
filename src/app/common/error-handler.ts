import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class DisplayAlertErrorErrorHandler extends ErrorHandler {
   
    async handleError(error) {
        let message = error.message;
        if (error.rejection){
            message = error.rejection.message;
        }
        alert(message);
        super.handleError(error);
    }
}