export interface ApiSettings {
  method:   string;
  url:      string;
  data?:    any; // BODYに含めるパラメータ
  params?:  any; // URLに含めるパラメータ
  headers?: any;
}

export interface ApiSubmitParams {
  settings:            ApiSettings;
  skip_loading?:        boolean;
  skip_success_toastr?: boolean;
  success:              any;
  failure?:             any;
}
