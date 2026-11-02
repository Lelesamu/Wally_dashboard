import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { NavService } from '../../services/nav.service';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menu-header',
  imports: [
    MenubarModule,
    MenuModule,
    AvatarModule,
    DrawerModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './menu-header-component.html',
  styleUrl: './menu-header-component.scss',
})

export class MenuHeaderComponent implements OnInit {

    barItems: MenuItem[] | undefined;
    sideItems: MenuItem[] | undefined;
    visible: boolean = false;

  constructor(
      private navService: NavService
    ) {}
  
    getMenu() {
      this.navService.getMenu().subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

    ngOnInit() {
        this.getMenu()
        this.barItems = [
            {
                icon: 'pi pi-bars',
                command: () => {
                            this.visible = !this.visible;
                        }
            },
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ];

        this.sideItems = [
            {
                label: 'Home'
            },
            {
                label: 'Samu'
            },
            {
                icon: 'pi pi-bars'
            }
        ]
    }

    
}

