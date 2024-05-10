import {
    SocialLoginModule,
    SocialAuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider
  } from 'angularx-social-login';
  
  export function socialAuthServiceFactory(): SocialAuthServiceConfig {
    return {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('305979762855-ui8ato77cm1e97mssgt6jodo9mc1d19g.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('131571760819154')
        }
      ]
    } 
  }
  