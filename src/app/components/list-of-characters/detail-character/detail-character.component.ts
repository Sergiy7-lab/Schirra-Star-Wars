import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataOfCharactersService} from "../../../services/data-of-characters.service";

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  character: any;

  constructor(private route: ActivatedRoute, private router: Router, private charactersService: DataOfCharactersService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

getCharacter() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.charactersService.getCharacter(id)
    .subscribe(character => this.character = character);
}

  goBack() {
    this.router.navigate(['characters']);
  }
}
