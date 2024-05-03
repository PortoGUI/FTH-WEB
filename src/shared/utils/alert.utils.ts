import Swal from 'sweetalert2';

export class AlertUtils {

  static Dialog(type: AlertType, text: string, questionTitle?: string): void {
    Swal.fire({
      title: this.setTitle(type, questionTitle),
      text,
      icon: type,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#808080',
      cancelButtonColor: '#D35E5E',
      showCancelButton: type === AlertType.QUESTION,
      cancelButtonText: type === AlertType.QUESTION ? 'Cancelar' : undefined,
    });
  }

  static setTitle(type: AlertType, question?: string): string {
    let title: string = '';
    switch (type) {
      case AlertType.SUCCESS:
      case AlertType.WARNING:
      case AlertType.ERROR:
      case AlertType.INFO:
        title = type.charAt(0).toUpperCase() + type.slice(1);
        break;
      case AlertType.QUESTION:
        title = question ?? 'Deseja continuar?';
        break;
    }
    return title;
  }

  static Snack = Swal.mixin({
    toast: true,
    timer: 2000,
    iconColor: 'black',
    position: 'top-right',
    timerProgressBar: false,
    showConfirmButton: false,
    customClass: {popup: 'colored-toast'},
  });

  static Toast(type: AlertType, text: string): void {
    this.Snack.fire({icon: type, title: text, iconColor: this.setIconColor(type)});
  }

  static setIconColor(type: AlertType): string {
    let color: string = '';
    switch (type) {
      case AlertType.SUCCESS:
        color = '#82E551';
        break;
      case AlertType.WARNING:
        color = '#ECCE54';
        break;
      case AlertType.ERROR:
        color = '#D35E5E';
        break;
      case AlertType.INFO:
      case AlertType.QUESTION:
        color = '#53A1D3';
        break;
    }
    return color;
  }

}

export enum AlertType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
  QUESTION = 'question',
}
