import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome: string = '';
  idade: number | null = null;
  sexo: string = '';

  onSubmit() {
    console.log('Dados salvos:', {
      nome: this.nome,
      idade: this.idade,
      sexo: this.sexo,
    });
    alert('Cadastro salvo com sucesso!');
  }

  onCancel() {
    this.nome = '';
    this.idade = null;
    this.sexo = '';
    alert('Cadastro cancelado.');
  }
}
