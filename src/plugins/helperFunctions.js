export default function (Vue) {
  Vue.helper = {
    /**
     *
     * @param key {String}
     * @param prop {String}
     * @param objectArr {Array}
     */
    getObjectsByKey (key, prop, objectArr) {
      return objectArr.filter(obj => obj[key] === prop)
    },
    getTimeStamp () {
      return new Date().toISOString().substring(0, 10);
    },
    getTimeStampWithMinutes(){
      let now = new Date()
      return ((now.getFullYear() + 0) + '-' + (now.getMonth() + 1) + '-' + (now.getDate()) + ' ' + now.getHours() + ':' +
        ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10)
          ? ('0' + now.getSeconds()) : (now.getSeconds())))
    },
    capitalize (val) {
      String.prototype.capitalizeFirstLetter = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
      }
      val.capitalizeFirstLetter()
    },
    getRestURL () {
      return 'http:localhost:3000'
    }
  }
  Object.defineProperties(Vue.prototype, {
    $helper: {
      get () {
        return Vue.helper
      }
    }
  })
}
