module.exports = function Cart(newCart) {
    this.items = newCart.items || {};
    this.totalQty = newCart.totalQty || 0;
    this.totalPrice = newCart.totalPrice || 0;

    this.add = function (item, id) {
        var storedItem = this.items[id];

        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 }
        }

        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty; 
        this.totalQty++;
        this.totalPrice += storedItem.item.price; 
    }

    this.addItems = function () {
        var array = [];
        for (var id in this.items) {
            array.push(this.items[id]);
        }
        return array;
    }

    this.removeItems = (id) => {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    }
}