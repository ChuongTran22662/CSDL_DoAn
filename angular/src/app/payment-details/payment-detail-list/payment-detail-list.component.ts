import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.scss'],
})
export class PaymentDetailListComponent implements OnInit {
  constructor(private service: PaymentDetailService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.service.refreshList();
  }

  // tslint:disable-next-line:typedef
  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  // tslint:disable-next-line:typedef
  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(PMId).subscribe(
        (res) => {
          this.service.refreshList();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
