import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cvName: string = ""

  constructor(
    public analyticsService: AnalyticsService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }
  downloadCV(){
    this.languageService.translateService.get("Header.cvName").subscribe(val => {
      this.cvName = val
      console.log("val Hello guy",val)
      // app url
      let url = window.location.href;

      // Open a new window with the CV
       window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    })

   }

}

