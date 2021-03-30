import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['blue-snackbar']
    });
  }

  openErrorSnackBar(error) {
    let errorMessage = '';
    if (error.status == 404) {
      errorMessage = "Claim image not found ! "
    }
    else {
      errorMessage = "Error!"
    }
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      //errorMessage = error.error.message;
    } else {
      // Get server-side error
      //errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    this._snackBar.open(errorMessage, "OK", {
      duration: 20000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['red-snackbar']
    });
  }
}
