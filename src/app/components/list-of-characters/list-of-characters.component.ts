import {Component, OnInit} from '@angular/core';
import {DataOfCharactersService} from "../../services/data-of-characters.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss']
})
export class ListOfCharactersComponent implements OnInit {

  characters: any = [];
  characterId: any;
  page: number = 2;
  loading: boolean = true;

  constructor(private charactersService: DataOfCharactersService, private router: Router) {
  }

  ngOnInit(): void {
    this.charactersList();
  }

  charactersList() {
    this.charactersService.getAllCharacters(this.page).subscribe(data => {
      this.characters = this.characters.concat(data);
      this.loading = false;
    })
    ++this.page
  }

  onScroll(): void {
    if (this.page < 10) {
      this.loading = true;
      this.charactersService.scroll(this.page).subscribe((data) => {
        this.characters = this.characters.concat(data)
        this.loading = false;
      });
      ++this.page
    }
  }

  getDetail(url: any) {
    this.characterId = url.match(/\d+/g);
    this.router.navigate([`detail/${this.characterId}`]);
  }
}
