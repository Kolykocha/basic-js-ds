const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    arr = [null]


    root() {
        return this.arr[0];
    }

    add(data) {
        if (this.arr[0] === null) {
            this.arr[0] = data
        } else {
            this.arr.push(data)
        }
    }

    has(data) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === data) {
                return true
            }
        }
        return false
    }

    find( data ) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === data) {
                return this.arr[i]
            }
        }
        return null
    }

    remove( data ) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === data) {
                this.arr.splice(i,1)
            }
        }
    }

    min() {
        let min ;
        if(this.arr[0] !== null) {
            min = this.arr[0]
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] < min) {
                   min = this.arr[i]
                }
            }
            return min
        }else{
            return null
        }
    }

    max() {
        let max ;
        if(this.arr[0] !== null) {
           max = this.arr[0]
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > max) {
                    max = this.arr[i]
                }
            }
            return max
        }else{
            return null
        }
    }
}

module.exports = {
    BinarySearchTree
};