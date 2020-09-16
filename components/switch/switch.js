Component({
  properties: {
    conf: {
      type: Object,
      value: {
        height: 0,
        width: 0,
        color: '',
        checked: true,
        disabled: false,
        radius: true,
        checkedText: "",
        uncheckedText: ''
      },
       //观察者：属性监听
      observer: function (newVal, oldVal) {
        if (typeof (newVal.height) == 'number' && newVal.height > 0) {
          oldVal.height = newVal.height
          if (typeof (newVal.width) == 'number' && newVal.width > newVal.height) {
            oldVal.width = newVal.width
          } else {
            oldVal.width = oldVal.height+100
          }
        }
        if (typeof (newVal.color) == 'string' && newVal.color.length > 0) {
          oldVal.color = newVal.color
        }
        if (newVal.checked) {
          oldVal.checked = true
        } else {
          oldVal.checked = false
        }
        if (newVal.disabled) {
          oldVal.disabled = true
        } else {
          oldVal.disabled = false
        }
        if (newVal.noRadius) {
          oldVal.noRadius = true
        } else {
          oldVal.noRadius = false
        }

        oldVal.checkedText = newVal.checkedText
        oldVal.uncheckedText = newVal.uncheckedText

        this.setData(oldVal)
      }
    },
  },
  data: {
    height: 0,
    width: 0,
    color: '',
    checked: true,
    disabled: false,
    noRadius: false,
    checkedText: "",
    uncheckedText: ''
  },
  methods: {
    doSwitch: function () {
      if (!this.data.disabled) {
        var value = {}
        value.checked = !this.data.checked
        this.triggerEvent('doSwitch', value)
        this.setData({
          checked: !this.data.checked
        })
      }
    }
  },
})