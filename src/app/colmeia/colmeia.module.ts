import { CommonModule } from "@angular/common";

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { ColmeiaComponent } from "./colmeia.component";
import { ColmeiaRoutingModule } from "./colmeia-routing.module";

@NgModule({
    declarations: [
        
    ],
    imports:[
        CommonModule,
        ColmeiaRoutingModule
    ],
    exports:[
    ]
})
export class  ColmeiaModule{}
