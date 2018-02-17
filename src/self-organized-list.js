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
        this.length = 0;
    }

    insert(data) {
        var node = new Node(data);
        this.tail = node;
        if (!this.head) {
            this.head = node;
        } else {
            var cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
            cur.next.prev = cur;
        }
        this.length++;
    }

    size() {
        return this.length;

    }

    at(index) {
        if (index < this.length){
            if (index == 0)
                return this.head.data;
            var node = this.head.next;
            for (var i = 1; i < index; i++){
                node = node.next;
            }
            return node.data;
        }
        else
            return null;
    }

    findNode(data) {

    }

    toArray() {
        var array=[];
        var node = this.head;
        while( node != null){
            array.push(node.data)
            node=node.next;
        }
        return array;
    }

    removeAt(index) {
        if (this.length == 1) {
            this.head = null;
        }
        var count = 0;
        var cur = this.head;
        while (count < index) {
            count++;
            cur = cur.next;
        }

        cur.next.prev = cur.prev;
        cur.prev.next = cur.next;
        this.length--;

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
