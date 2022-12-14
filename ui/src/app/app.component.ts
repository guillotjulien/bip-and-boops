import { Component } from '@angular/core';

import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loggerService: LoggerService) {}

  ngOnInit() {}
}
