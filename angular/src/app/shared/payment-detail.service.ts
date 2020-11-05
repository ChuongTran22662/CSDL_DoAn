import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  formData: PaymentDetail = {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationDate: null,
    PMId: null
  };

  readonly rootURL = 'http://localhost:63095/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }
  // tslint:disable-next-line:typedef
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }
  // tslint:disable-next-line:typedef
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  }

  // tslint:disable-next-line:typedef
  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
