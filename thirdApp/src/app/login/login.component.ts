import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import {
     FacebookLoginProvider,
    GoogleLoginProvider, SocialUser, SocialAuthService,
} from 'angularx-social-login';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../shared/model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    message: string = '';
    username: string = '';
    emptyUser: User = new User(); // Initialize an empty user object
    user : SocialUser | undefined;

    constructor(private router: Router,
        private userService: UserService,
        private authService: SocialAuthService) { }

        ngOnInit() {
            console.log(this.authService);
            if (this.authService && this.authService.authState) {
                this.authService.authState.subscribe(
                    (user): any => {
                        this.user = user;
                    },
                    (error) => {
                        console.error('Error subscribing to authState:', error);
                    }
                );
            } else {
                console.error('AuthService or authState is not properly initialized.');
            }
        }
        

    connect(username: string) {
        this.clearData();
        if (!username) {
            this.message = 'You must enter a username';
            return;
        }

        const user = new User(); // Instantiate a new User object
        user.id = 0; // Assuming id is required
        user.username = username;

        this.userService.login(user)
            .subscribe(
                () => {
                    sessionStorage.setItem('user', username);
                    this.router.navigate(['home']);
                },
                (error: HttpErrorResponse) => {
                    this.message = error.error;
                });
    }

    signInWithGoogle(): void {
        console.log("Sign in called in login.ts");
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    clearData() {
        sessionStorage.removeItem('user');
        this.message = 'No Value';
    }

    signUp(event: Event): void {
        event.preventDefault();

        const user = new User();
        user.id = 0;
        user.username = this.username;

        this.userService.signUp(user)
            .subscribe(
                () => {
                    console.log('Sign up successful');
                    // Redirect or perform other actions upon successful sign up
                },
                () => {
                    console.error('Sign up failed:');
                    // Handle sign up error, e.g., display error message
                }
            );
    }

    login(event: Event): void {
        event.preventDefault();
        this.connect(this.username);
    }
     onSignIn(googleUser:any) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
}
