import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdventureSongsRoutingModule } from "./adventure-songs-routing.module";
import { AdventureSongsComponent } from "./adventure-songs.component";

@NgModule({
    imports: [
        CommonModule,
        AdventureSongsRoutingModule
    ],
    declarations: [AdventureSongsComponent]
})
export class AdventureSongsModule{}