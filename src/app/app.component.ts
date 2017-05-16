import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {HomePage} from "../pages/home/home";
import {Deeplinks} from "@ionic-native/deeplinks";
import {ProdutoPage} from "../pages/produto/produto";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navChild: Nav;
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              deeplinks: Deeplinks,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // // Deeplink
      deeplinks.routeWithNavController(this.navChild, {
        '/produto/:codigo': ProdutoPage,
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Native route', match);
      }, (nomatch) => {
        // nomatch.$link - the full link data
        //console.log('Got a deeplink that didn\'t match', nomatch);
      });
    });

  }

}

