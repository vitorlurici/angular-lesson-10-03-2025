import { Component } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroComponent],
  template: `<app-cadastro></app-cadastro>`,
})
export class AppComponent {}
