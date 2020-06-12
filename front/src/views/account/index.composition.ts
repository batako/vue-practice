import router from '@/router'
import { reactive } from '@vue/composition-api'
import UserService from '@/services/user'

const composition = () => {
  const state = reactive({
    input_image:      null,
    upload_image_url: ''
  })


  const onImagePicked = (file: any) => {
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) return
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        state.upload_image_url = fr.result as string
      })
    } else {
      state.upload_image_url = ''
    }
  }


  const updateAvatar = () => {
    console.log('updateAvatar')
    UserService
      .updateAvatar(state.input_image)
      .then((response: any) => {
        state.input_image = null
        state.upload_image_url = ''
      })
  }


  const goHome = () => {
    router.push('/')
  }


  return {
    state,
    onImagePicked,
    updateAvatar,
    goHome,
  }
}

export { composition }
