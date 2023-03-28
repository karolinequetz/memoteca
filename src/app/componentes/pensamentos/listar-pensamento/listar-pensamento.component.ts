import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
paginasAtual:number = 1;
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginasAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
