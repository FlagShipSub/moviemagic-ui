import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutes } from './signup.routing';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  imports: [
    CommonModule,
    SignupRoutes,
    ButtonModule,
    SplitterModule,
    FormsModule,
    CardModule,
    FloatLabelModule,
    RadioButtonModule,
    DropdownModule,
    InputTextModule,
  ],
  declarations: [SignupComponent],
})
export class SignupModule {}
