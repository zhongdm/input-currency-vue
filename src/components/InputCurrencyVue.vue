<template>
  <a-input
    :placeholder="placeholder"
    :size="size"
    :disalbed="disalbed"
    :allowClear="allowClear"
    :value="showValue"
    @change="onChange"
    @focus="onFocus"
    @pressEnter="pressEnter"
    @blur="onBlur"></a-input>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    allowClear: Boolean,
    currency: {
      type: Boolean,
      default: false
    },
    value: Number | String,
    placeholder: {
      type: String,
      default: '请输入'
    },
    size: {
      type: String,
      default: 'default'
    },
    disalbed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pureValue: null,
      formatValue: null,
      showValue: null,
      format: '',
      reg: /(?<=(^|\s)\d+)(?=(\d{3})+\b)/g,
      reg2: /,/g
    }
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.toggleValue(val, true)
      }
    }
  },
  mounted() {
    this.toggleValue(this.value, true)
  },
  methods: {
    onChange($event) {
      this.toggleValue($event.target.value, true)
    },
    pressEnter($event) {
      this.toggleValue($event.target.value, true)
    },
    onFocus($event) {
      this.toggleValue($event.target.value, false)
    },
    onBlur($event) {
      this.toggleValue($event.target.value, true)
    },
    toggleValue($event, isFormat) {
      let value = this.removeReg($event)
      if (!this.onValidate(value)) {
        this.clearValue()
        return
      }
      value = this.isFalsyAndNotZero(value) ? null : Number(value)
      this.pureValue = value
      if (isFormat) {
        this.showValue = this.replace(value)
      } else {
        this.showValue = value
      }
      this.formatValue = this.replace(value)
      this.emit(this.pureValue, this.formatValue)
    },
    onValidate(value) {
      if (isNaN(value)) return false
      return true
    },
    clearValue() {
      this.showValue = null
      this.pureValue = null
      this.formatValue = null
      this.emit(this.pureValue, this.formatValue)
    },
    isFalsyAndNotZero(value) {
      return !value && value !== 0
    },
    replace(value) {
      return this.isFalsyAndNotZero(value) ? null : (value+'').replace(this.reg, '$1,')
    },
    removeReg(value) {
      return this.isFalsyAndNotZero(value) ? null : (value + '').replace(this.reg2, '')
    },
    emit(value, formatValue) {
      console.log(this.currency, this.currency ? formatValue : value)
      this.$emit('change', this.currency ? formatValue : value)
    },
  }
}
</script>
