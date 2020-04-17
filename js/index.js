class Localstorage {
    name = ''

    setName(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    dispatchEventStroage() {
      const signSetItem = localStorage.setItem;
      const signRemoveItem = localStorage.removeItem;
      const that = this;
      localStorage.setItem = function (key) {
        arguments[0] = `${that.name}-${key}`;
        signSetItem.apply(this, arguments);
        Object.defineProperty(localStorage, `${key}`, {
          get: function () {
            return localStorage.getItem(key)
          }
        })
      };
      localStorage.getItem = function (key) {
        const value = `${that.name}-${key}`;
        return this[value];
      };
      localStorage.removeItem = function (key) {
        arguments[0] = `${that.name}-${key}`;
        signRemoveItem.apply(this, arguments);
      };
      localStorage.clear = function () {
        for (const iterator of Object.keys(this)) {
          if(iterator.includes(`${that.name}-`)){
            delete this[iterator]
          }
        }
      }
    }
}

export default Localstorage;