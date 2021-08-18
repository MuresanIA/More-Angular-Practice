import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestsRoutingModule } from "./quests-routing.module";
import { QuestsComponent } from "./quests.component";

@NgModule({
    imports: [
        CommonModule,
        QuestsRoutingModule
    ],
    declarations: [QuestsComponent]
})
export class QuestsModule {}