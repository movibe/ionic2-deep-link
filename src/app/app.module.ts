import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {ProdutoPageModule} from "../pages/produto/produto.module";
import {ProdutoPage} from "../pages/produto/produto";
import {Deeplinks} from "@ionic-native/deeplinks";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ProdutoPageModule,
    IonicModule.forRoot(MyApp,
      {
        locationStrategy: 'path',
      },
      {
        // DeepLinker
        links: [
          {component: ProdutoPage, name: 'Produto', segment: 'produto/:codigo'},
        ]
      }
      )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
