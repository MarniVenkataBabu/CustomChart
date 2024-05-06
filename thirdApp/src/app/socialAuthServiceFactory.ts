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
          provider: new GoogleLoginProvider('823898676621-427jhcjug96ijmbt9il0h9chd8norbdk.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('131571760819154')
        }
      ]
    } as SocialAuthServiceConfig;
  }
  