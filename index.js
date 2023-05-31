import AudioPlayerVue from './src/components/AudioPlayerVue.vue';
import _Vue from 'vue'

AudioPlayerVue.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(AudioPlayerVue.name, AudioPlayerVue)
}

export default AudioPlayerVue