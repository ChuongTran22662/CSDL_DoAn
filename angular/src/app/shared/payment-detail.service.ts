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
    PMId: null,
  };

  readonly rootURL = 'http://localhost:63095/api';

  list: PaymentDetail[];

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getPaymentDetail() {
    return this.http.get(this.rootURL + '/PaymentDetails');
  }

  // tslint:disable-next-line: typedef
  insertPaymentDetail() {
    this.formData.CVV = '123';
    this.formData.CardNumber = '123';
    this.formData.CardOwnerName = '123';
    this.formData.ExpirationDate = '123';

    return this.http.post(this.rootURL + '/PaymentDetails', this.formData);
  }

  // tslint:disable-next-line: typedef
  putPaymentDetail() {
    return this.http.put(
      this.rootURL + '/PaymentDetails/' + this.formData.PMId,
      this.formData
    );
  }

  // tslint:disable-next-line: typedef
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetails/' + id);
  }

  refreshList(): void {
    this.http
      .get(this.rootURL + '/PaymentDetails')
      .toPromise()
      .then((res) => (this.list = res as PaymentDetail[]));
  }
}
