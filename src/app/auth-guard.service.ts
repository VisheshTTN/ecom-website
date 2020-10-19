import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from './users.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private usersService: UsersService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.usersService.isAuthenticated();
    }
}