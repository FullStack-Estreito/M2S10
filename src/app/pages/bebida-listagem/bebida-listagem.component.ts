import { Component } from "@angular/core";
import { BEBIDAS_MOCK } from "src/app/shared/mocks/bebida-mock";

@Component({
  selector: "nfd-bebida-listagem",
  templateUrl: "./bebida-listagem.component.html",
  styleUrls: ["./bebida-listagem.component.scss"],
})
export class BebidaListagemComponent {
  bebidaLista = BEBIDAS_MOCK;
}
