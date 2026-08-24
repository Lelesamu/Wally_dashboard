import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';


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
  visible: boolean = false;
}
