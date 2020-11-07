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

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
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

  // onSubmit(form: NgForm): void {
  //   if (this.service.formData.PMId === 0) {
  //     this.insertRecord(form);
  //   }
  //   else {
  //     this.updateRecord(form);
  //   }
  // }

  get(): void {
    this.service.getPaymentDetail().subscribe(
      res => {
        console.log(res);
        this.service.refreshList();
      }
    );
  }

  add(): void {
    this.service.insertPaymentDetail().subscribe(
      res => {
        this.service.refreshList();
      }
    );
  }

  deleteData(event){
    this.service.deletePaymentDetail(event).subscribe(res => {

    })
  }
}
