import { Component } from '@angular/core';
import { ProcessingService } from './../api/services/processing.service';
import { Processing } from './../api/models/processing';
import { ActivatedRoute } from '@angular/router';
import { ArbeitNowService } from './../api/services/arbeit-now.service';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent {
  constructor(private route: ActivatedRoute,
    private processingService: ProcessingService,
    private arbeitNowService: ArbeitNowService) { }

  id!: number;
  proccesingRecord: Processing = {
    date: null,
    offers: null
  };


  ngOnInit(): void {
    this.route.paramMap
      .subscribe(p => this.id = +(p.get("id") ?? 0))

    this.processingService.processingIdGet({ id: this.id })
      .subscribe(result => {
        this.proccesingRecord = result;
        this.singledata();
      })
  }
  singledata(): void {
    this.arbeitNowService.arbeitNowProcIdGet({ procId: this.id })
      .subscribe(result => this.proccesingRecord.offers = result)
  }
}
