import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    // Adjust analytics tracking to reflect the Munch Mates app
    this.analyticsService.sendAnalyticPageView("/munch-mates", "User visited Munch Mates Landing Page");
  }
}
