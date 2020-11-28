import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-landing-body',
    templateUrl: './landing-body.component.html',
    styleUrls: ['./landing-body.component.scss']
})
export class LandingBodyComponent implements OnInit
{

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
    {
        iconRegistry.addSvgIcon('landing-art', sanitizer.bypassSecurityTrustResourceUrl('../assets/landing-art.svg'));
    }

    ngOnInit(): void
    {
    }

}
