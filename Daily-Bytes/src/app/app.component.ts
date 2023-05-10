import { Component } from '@angular/core';
import { WikiDataService } from './wiki-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: any;
  public extract: any;
  public url: string = "213";
  pageId: string = '';
  showSummary: boolean = true;
  showError: boolean = false;
  errorMsg: string = 'Error Occured fetching the Article! Please try again.'

  constructor (private wikiService: WikiDataService) {}

  ngOnInit() {
    this.getRandomArticle();
  }

  private getRandomArticle(): void{
    try {
      this.wikiService.getRandomWikiArticle().subscribe({
        next: value => {
          const page = value.query.pages;
          if(page) {
            for(let i in page) { this.pageId = i; } //get the dynamic page id
            this.title = page[this.pageId].title;
            this.extract = page[this.pageId].extract;
            console.log(this.title, this.extract);
            this.showError = false;
            this.showSummary = true;
          }
        },
        error: (err) => console.log('Error ', err)
      });
    } catch (error) {
      this.showError = true;
      this.showSummary = false;
    }
  }

  private getArticleUrl(pageId: number): string {
    return 'asdhas';
  }

  public getNewArticle(): void {
    this.getRandomArticle();
    this.url = "asda";
  }
}
