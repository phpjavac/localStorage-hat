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
        const that = this;
        /** 重写增 */
        localStorage.setItem = function (key) {
            arguments[0] = `${that.name}-${key}`;
            signSetItem.apply(this, arguments);
        };
        /** 重写查 */
        localStorage.getItem = function (key) {
            const value = `${that.name}-${key}`;
            return this[value];
        };
    }
}

export default Localstorage;