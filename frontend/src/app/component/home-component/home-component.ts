import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import {
  Sidebar,
  SidebarLayout,
  SidebarAside,
  SidebarPanel,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMain,
  SidebarTrigger,
  SidebarSpacer,
  SidebarBackdrop,
} from 'primeng/sidebar';

//TODO: implentare il drawer laterale. La sidebar in primeng non funziona, è necessario il drawer o usare primeng di versione superiore.
@Component({
  selector: 'app-home-component',
  imports: [
    AvatarModule,
    DrawerModule,
    ButtonModule,
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

  isMobile = signal(false);
  
  constructor() {
      if (typeof window === 'undefined') return;
      const mql = window.matchMedia('(max-width: 1023px)');
      this.isMobile.set(mql.matches);
      mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
  }

  ngOnInit() {
    console.log('here')
  }
}
