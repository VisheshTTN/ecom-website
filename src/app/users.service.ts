import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersService {
    private users = [
        {
            name: 'Vishesh',
            email: 'vishesh42@gmail.com',
            password: 'vishesh123'
        }
    ]

    loggedIn = false;

    checkUserDetails(email: string, password: string) {
        let authenticated = this.users.find(user=> {
            return user.email===email && user.password===password;
        });

        if(authenticated) {
            this.loggedIn = true;
        }

        return this.loggedIn;
    }

    isAuthenticated() {
        return this.loggedIn;
    }

    addUser(user: any) {
        this.users.push(...user);
    }
}