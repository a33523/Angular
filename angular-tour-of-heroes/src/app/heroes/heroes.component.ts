import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' //定義 Hero 的屬性
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';



/**
 *裝飾器，只會修改這個component的css
 *
 * @export
 * @class HeroesComponent
 * @implements {OnInit}
*/
@Component({

  /**
 *裝飾器選取器
 *
 * @export
 * @class HeroesComponent
 * @implements {OnInit}
 */
  selector: 'app-heroes',


  /**
 *呈現面的 html 路徑
 *
 * @export
 * @class HeroesComponent
 * @implements {OnInit}
 */
  templateUrl: './heroes.component.html',

  /**
 *定義只有在此處才會被執行的css
 *
 * @export
 * @class HeroesComponent
 * @implements {OnInit}
 */
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
/**
 *這裡使用強型別來宣告 Hero
 *
 * @memberof HeroesComponent
 */


heroes: Hero[];


/**
 *注入服務元件
 *
 * @memberof HeroesComponent
 */
constructor(private heroService: HeroService) { }


ngOnInit() {

    //初始化這個 component 的資料
  this.getHeroes();
}

getHeroes(): void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}

delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}
}
