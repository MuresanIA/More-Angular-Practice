import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdventureSongsComponent } from "./adventure-songs.component";

const routes: Routes = [
    {
        path: '',
        component: AdventureSongsComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdventureSongsRoutingModule {}