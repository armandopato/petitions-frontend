import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
    {
        iconRegistry.addSvgIcon('petition-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/petition.svg'));
        iconRegistry.addSvgIcon('menu-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/menu.svg'));
    }

    @Output() menuButtonClickChange = new EventEmitter<void>();
    @Input() menuButtonClick = false;

    onMenuButtonClick(): void
    {
        this.menuButtonClickChange.emit();
    }

    ngOnInit(): void
    {
    }
}
