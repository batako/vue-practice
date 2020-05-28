export interface ApiSettings {
  method:   'get' | 'delete'| 'post'| 'put';
  url:      string;
  data?:    any; // BODYに含めるパラメータ
  params?:  any; // URLに含めるパラメータ
  headers?: any;
}

export interface ApiSubmitParams {
  settings:            ApiSettings;
  skip_loading?:        boolean;
  skip_success_toastr?: boolean;
}
