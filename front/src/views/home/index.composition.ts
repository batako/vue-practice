import router from '@/router'
import ArticleService from '@/services/article'
import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
    show_post_modal: false,
    drawer: null,
    items: [
      { icon: 'mdi-contacts', text: 'Contacts' },
      { icon: 'mdi-history', text: 'Frequently contacted' },
      { icon: 'mdi-content-copy', text: 'Duplicates' },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'mdi-plus', text: 'Create label' },
        ],
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' },
        ],
      },
      { icon: 'mdi-cog', text: 'Settings' },
      { icon: 'mdi-message', text: 'Send feedback' },
      { icon: 'mdi-help-circle', text: 'Help' },
      { icon: 'mdi-cellphone-link', text: 'App downloads' },
      { icon: 'mdi-keyboard', text: 'Go to the old version' },
    ],
    main_manu_items: [
      {
        title: 'Logout',
        icon: 'mdi-login',
        action: () => {
          router.push('/login')
        },
      },
    ],
  })


  const _init = () => {
    document.title = 'Home'
    ArticleService.all()
  }


  const showPostModal = () => {
    state.show_post_modal = true
  }


  const closePostModal = () => {
    state.show_post_modal = false
  }

  return {
    state,
    _init,
    showPostModal,
    closePostModal,
  }
}

export { composition }
