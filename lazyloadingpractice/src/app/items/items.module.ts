import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";

@NgModule({
    imports: [
        CommonModule,
        ItemsRoutingModule
    ],
    declarations: [ItemsComponent]
})
export class ItemsModule {}