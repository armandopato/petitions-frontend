import {Component, OnInit} from '@angular/core';
import {Faculties} from '../../util/school-names/faculties.enum';
import {Schools} from '../../util/school-names/schools.enum';
import {ENPs} from '../../util/school-names/enps.enum';
import {CCHs} from '../../util/school-names/cchs.enum';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit
{
    faculties = Faculties;
    enps = ENPs;
    cchs = CCHs;
    schools = Schools;

    constructor()
    {
    }

    ngOnInit(): void
    {
    }

}
