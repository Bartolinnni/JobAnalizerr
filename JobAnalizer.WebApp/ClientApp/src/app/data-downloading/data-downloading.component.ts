import { Component } from '@angular/core';
import { ArbeitNowService } from './../api/services/arbeit-now.service';
//import { JobOffer } from './../api/models/job-offer';
import { Processing } from './../api/models/processing';
import { ProcessingService } from './../api/services/processing.service';
import { JobOfferModel } from './../api/models/job-offer-model';

@Component({
  selector: 'app-data-downloading',
  templateUrl: './data-downloading.component.html',
  styleUrls: ['./data-downloading.component.css']
})
export class DataDownloadingComponent {
  sample!: JobOfferModel[];

  proccess!: Processing;
  constructor(private readonly arbeitNowService: ArbeitNowService,
    private readonly processingService: ProcessingService) { };

  ngOnInit() {

  };

  downloadArbeitNow(): void {
    this.arbeitNowService.arbeitNowGet({})
      .subscribe(response => {
        this.sample = response;
        console.log(response[1]);
        console.log(this.sample);
        this.saveJustJoin()
      })
  }

  saveJustJoin(): void {
    var d = new Date();
    var date = ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    this.processingService.processingPost({
      body:
      {
        date: d,
        offers: this.sample
      }
    })
      .subscribe(_ => console.log('Added to server'))
  };

}
