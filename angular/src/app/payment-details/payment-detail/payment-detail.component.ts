import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.resetForm();
  }

  // tslint:disable-next-line:typedef
  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    };
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    if (this.service.formData.PMId === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  // tslint:disable-next-line:typedef
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        console.log(res);
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
