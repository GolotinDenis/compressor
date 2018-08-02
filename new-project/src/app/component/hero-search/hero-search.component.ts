 import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HeroService} from '../../service/hero.service';
import { Hero} from '../../class/hero';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService) { }
  search(term){
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(debounceTime(300),distinctUntilChanged(),switchMap((term:string)=>this.heroService.searchHeroes(term)))
  }

}
