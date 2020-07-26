import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShortenPipe } from "./shorten/shorten.pipe";

@NgModule({
  declarations: [ShortenPipe],
  imports: [CommonModule],
  exports: [ShortenPipe]
})
export class PipesModule {}
