import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [UsersListComponent],
    exports: [UsersListComponent]
})
export class UsersListModule {
}
