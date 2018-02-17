class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {

    }

    size() {
        if (this.head==null){
            return 0;
        }

    }

    at(index) {

    }

    findNode(data) {

    }

    toArray() {

    }

    removeAt(index) {

    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
