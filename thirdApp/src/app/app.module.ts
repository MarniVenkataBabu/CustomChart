import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { RxStompService } from './rx-stomp.service';
import { ChannelService } from './shared/service/channel.service';
import { MessageService } from './shared/service/message.service';
import { UserService } from './shared/service/user.service';
import { socialAuthServiceFactory } from './socialAuthServiceFactory';
import { SocialAuthService } from 'angularx-social-login';
import { NotificationComponent } from './layout/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    UserService,
    ChannelService,
    MessageService,
    {
      provide:RxStompService,
      useFactory: rxStompServiceFactory,
    },{
      provide: SocialAuthService,
      useFactory: socialAuthServiceFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
