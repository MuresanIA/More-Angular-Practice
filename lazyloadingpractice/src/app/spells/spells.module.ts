import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SpellsRoutingModule } from "./spells-routing.module";
import { SpellsComponent } from "./spells.component";

@NgModule({
    imports: [
        CommonModule,
        SpellsRoutingModule
    ],
    declarations: [SpellsComponent]
})
export class SpellsModule {}