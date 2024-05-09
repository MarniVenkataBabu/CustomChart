import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [UsersListComponent],
    exports: [UsersListComponent]
})
export class UsersListModule {
}
