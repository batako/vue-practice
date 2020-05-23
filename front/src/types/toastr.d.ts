export interface Toastr {
  type:    'success' | 'danger' | 'warning';
  message: string;
  force:   boolean; // 他のメッセージを消すか
  key:     string;  // 自動設定
}