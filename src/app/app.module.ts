import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LandingBodyComponent} from './landing-body/landing-body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavComponent} from './sidenav/sidenav.component';
import {SchoolGroupComponent} from './sidenav/school-group/school-group.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LandingBodyComponent,
        SidenavComponent,
        SchoolGroupComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        HttpClientModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
