import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule( {
    imports: [
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule
    ],
    declarations: [],
    exports: [
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule
    ]
} )
export class SharedModule {

}
