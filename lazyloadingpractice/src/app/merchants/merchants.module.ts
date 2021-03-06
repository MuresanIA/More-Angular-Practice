import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MerchantsRoutingModule } from "./merchants-routing.module";
import { MerchantsComponent } from "./merchants.component";

@NgModule({
    imports: [
        CommonModule,
        MerchantsRoutingModule
    ],
    declarations: [MerchantsComponent]
})
export class MerchantsModule {}