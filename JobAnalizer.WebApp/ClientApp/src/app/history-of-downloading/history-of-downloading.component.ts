import { Component } from '@angular/core';
import { ProcessingService } from './../api/services/processing.service';
import { Processing } from './../api/models/processing';

@Component({
  selector: 'app-history-of-downloading',
  templateUrl: './history-of-downloading.component.html',
  styleUrls: ['./history-of-downloading.component.css']
})
export class HistoryOfDownloadingComponent {
  sample!: Processing[];
  checkTable: number[] = [];
  trueCount = 0
  buttonBool = true
  checkBool = false
  id1: number | undefined = -1
  id2: number | undefined = -1
  constructor(private proccessingService: ProcessingService) { }

  displayLocationDeletePopup = false;

  ngOnInit(): void {
    this.proccessingService.processingGet({})
      .subscribe(response => {
        this.sample = response.reverse();
      })
  };

  show(): void {
    this.proccessingService.processingGet({})
      .subscribe(response => {
        this.sample = response.reverse();
        //console.log(response);
        //console.log(this.sample);
      })
  };

  delete(id: number | undefined): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.proccessingService.processingDelete({
        id: id
      }).subscribe(_ => {
        console.log('Deleted from server');
        this.show()
      });
    }

  }

  checkBox(values: any, id: number | undefined) {
    if (values.currentTarget.checked == true) {
      this.trueCount += 1
      if (this.id1 == -1) {
        this.id1 = id
      }
      else if (this.id2 == -1) {
        this.id2 = id
      }

      if (this.trueCount > 2) {
        alert('You can chose only two records!')
      }
    }
    else {
      this.trueCount -= 1

      if (this.id1 == id) {
        this.id1 = -1
      }
      else if (this.id2 == id) {
        this.id2 = -1
      }
    }


    if (this.trueCount == 2) {
      this.buttonBool = false
    }
    else {
      this.buttonBool = true
    }

    if (this.trueCount < 2) {
      this.checkBool = false
    }
    else {
      this.checkBool = true
    }
  }
}
