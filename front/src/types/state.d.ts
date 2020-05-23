import { Toastr } from '@/types/toastr';

export interface State {
  is_processing: boolean;
  toastrs:       Array<Toastr>;
}