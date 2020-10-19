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

    loggedIn = true;

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

    addUser(user: {name: string, email: string, password: string }) {
        const promise = new Promise(
            (resolve, reject) => {
                
                let existingUser = this.users.find(existingUser=> {
                    return existingUser.email === user.email
                });
                
                if(existingUser) {
                    reject({message: 'User already exists!'});
                }
                else{
                    this.users.push({...user});
                    resolve(this.users);
                }
            }
        )
        return promise;
    }

    logout() {
        this.loggedIn = false;
        return this.loggedIn;
    }
}