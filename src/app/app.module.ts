import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsumeApiProvider } from '../providers/consume-api/consume-api';
import { EventsManagerProvider } from '../providers/events-manager/events-manager';
import { MatProgressBarModule} from '@angular/material';

import { LoginPage } from '../pages/login/login';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { LoginProvider } from '../providers/login/login';
import { ConfigurationProvider } from '../providers/configuration/configuration';
import { ConfigurationMockProvider } from '../mock/configuration-mock-provider';
import { LoginMockProvider } from '../mock/login-mock-provider';
import { TabsPage } from '../pages/tabs/tabs';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { DetailNotificationPage } from '../pages/detail-notification/detail-notification';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';


export const MATERIAL_COMPONENTS = [
  MatProgressBarModule
]

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    DetailNotificationPage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    DetailNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsumeApiProvider,
    EventsManagerProvider,
    LocalStorageProvider,
    //LoginProvider,
    //ConfigurationProvider
    {
      useClass: LoginMockProvider,
      provide: LoginProvider
    },
    {
      useClass: ConfigurationMockProvider,
      provide:  ConfigurationProvider
    },
    LaunchNavigator,
    Geolocation
  ]
})
export class AppModule {}
