import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
    {
        iconRegistry.addSvgIcon('petition-logo', sanitizer.bypassSecurityTrustResourceUrl('../assets/petition-logo.svg'));
    }

    ngOnInit(): void
    {
    }

}
