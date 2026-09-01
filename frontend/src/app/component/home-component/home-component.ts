import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { NavService } from '../../services/nav.service';


// TODO: Modificare tabella wd_users su db, non corrisponde con la nuova entity aggiornata (campi NULL -> NOT NULL...)
// TODO: Spostare interface nella cartella model
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

  constructor(
    private navService: NavService
  ) {}

  ngOnInit() {
    this.getMenu()
  }

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
}
