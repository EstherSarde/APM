import { Component, OnInit } from '@angular/core';
import { IDados } from './dados';
import { GithubService } from './github.service';

@Component({
  selector: 'pm-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  dados: IDados;
  constructor(private servico:GithubService) { }

  ngOnInit() {
     this.servico.getMeusDados().subscribe(result=>{
      this.dados = result
    })
  }

}
