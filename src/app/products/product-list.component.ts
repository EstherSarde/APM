import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { ProducService } from "./product.servise";

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductComponent implements OnInit {
  titulo: string = "Lista de Produtos"
  mostrarImagem: boolean = false
  _filtro: string

  constructor(private servico: ProducService) {}

  get filtro() {
    return this._filtro
  }

  set filtro(valor) {
    this._filtro = valor;
    this.produtosFiltrados = this.filtro ? this.filtrar(valor) : this.produtos
  }

  produtosFiltrados = []
  produtos: IProduct[]

  toggleImagem(): void {
    this.mostrarImagem = !this.mostrarImagem
  };

  ngOnInit(): void {
    this.servico.getProdutos().subscribe(
      dados => {
        this.produtos = dados
        this.produtosFiltrados = this.produtos
      }
    )
    
  };

  filtrar(letras: string): IProduct[] {

    letras = letras.toLocaleLowerCase();
    let filtrados: IProduct[] = this.produtos.filter((p: IProduct) => 
      p.productName.toLocaleLowerCase().indexOf(letras) !== -1)
    return filtrados;
  }

  onRatingClicked(message: string): void {
    this.titulo = 'Lista de Produtos: ' + message;
  }

}