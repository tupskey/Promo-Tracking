import { Component } from '@angular/core'

@Component({
    selector: 'nav-bard',
    templateUrl: './navbar.component.html',
    styles: [ 
        ` 
        .rock{background-color: navy; color: white}
        a.nav-link{color: white; ; font-size: 19px}
        a.nav-brand{color: white; font-size: 19px}
        navbar{color: white}
        
        `
    ]
})

export class NavBarComponent{

}