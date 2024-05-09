import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { RxStompService } from '../../rx-stomp.service';
import { SocialAuthService } from 'angularx-social-login';

@Component({
    selector: 'wt-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    receiver!: string;
     username!: string;
     SocialAuthService!: any;

    constructor(private router: Router, private userService: UserService
        , private stompService: RxStompService, private socialAuthService: SocialAuthService) {
            this.SocialAuthService = socialAuthService;
    }

    ngOnInit() {
    this.username = sessionStorage.getItem('user')!;
    if (this.username === '') {
        this.router.navigate(['/']);
    } else {
        this.userService.login({ 'id': 0, 'username': this.username });
    }
}


    @HostListener('window:unload', ['$event'])
    onUnload() {
        this.logout();
    }

    onReceiverChange(event:any) {
        this.receiver = event;
    }

    logout() {
        this.userService.logout({ 'id': 0, 'username': this.username })
            .subscribe(
                (res:any) => {
                    this.clearSession();
                },
                (error:any) => {
                    console.log(error._body);
                });
    }

    logoutSocial() {
        this.SocialAuthService.signOut().then(() => {
            this.clearSession();
        },
            () => {
                this.clearSession();
            });
    }

    clearSession() {
        sessionStorage.removeItem('user');
        this.stompService.deactivate();
        this.username = '';
        this.router.navigate(['/']);
    }
}
