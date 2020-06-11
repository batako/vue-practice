import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
    input_image:      null,
    upload_image_url: ''
  })


  const onImagePicked = (file: File) => {
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


  return {
    state,
    onImagePicked,
  }
}

export { composition }
