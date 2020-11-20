import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-school-group',
    templateUrl: './school-group.component.html',
    styleUrls: ['./school-group.component.scss']
})
export class SchoolGroupComponent implements OnInit
{
    @Input() title: string;
    @Input() schoolEnum: any;

    constructor()
    {
    }

    ngOnInit(): void
    {
    }

}
