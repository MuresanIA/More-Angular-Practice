import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroesComponent } from "./heroes.component";
@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule
    ],
    declarations: [HeroesComponent]
})
export class HeroesModule { }