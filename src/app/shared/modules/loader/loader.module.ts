import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, NgxUiLoaderHttpModule} from "ngx-ui-loader";
import { LoaderComponent } from './components/loader/loader.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: "#1493ff",
  fgsPosition: "center-center",
  fgsSize: 90,
  fgsType: SPINNER.threeBounce,
  gap: 24,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#1493ff",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
}

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({showForeground : true}),
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
