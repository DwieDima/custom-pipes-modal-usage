import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PipesModule } from "../pipes/pipes.module";
import { ModalPage } from "./modal.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PipesModule],
  declarations: [ModalPage]
})
export class ModalPageModule {}
