import Swal, { SweetAlertType, SweetAlertOptions } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

const customRSwalFire = (type: SweetAlertType, title: string, callback?: () => void) => {
  const swalOptions: SweetAlertOptions = {
    type,
    title
  }
  if (callback) {
    swalOptions.showCancelButton = true
  }
  ReactSwal.fire(swalOptions).then(({ value }) => {
    if (callback && value) {
      callback();
    }
  })
}

export default customRSwalFire;