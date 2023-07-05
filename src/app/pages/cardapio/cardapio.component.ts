import { Component } from "@angular/core";

@Component({
  selector: "nfd-cardapio",
  templateUrl: "./cardapio.component.html",
  styleUrls: ["./cardapio.component.scss"],
})
export class CardapioComponent {
  infoApresentacao = {
    titulo: "NgFood",
    descricao: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
      temporibus! Quae pariatur nisi adipisci tempora eius at. Consectetur, id
      tempora recusandae fugiat, dolores quaerat, necessitatibus ipsum natus est
      sunt ipsam?
    `,
    tituloBotao: "Cardápio",
  };
}
