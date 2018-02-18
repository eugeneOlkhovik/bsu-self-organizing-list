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

    size() {return this.length;}

    at(index) {
        if (index < this.length){
            if (index === 0)
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
    var node= this.head;
    while(node) {
        if (node.data === data) return node;
        node = node.next;
    }
    return null;
    }

    toArray() {
        var array=[];
        var node = this.head;
        while(node){
            array.push(node.data)
            node=node.next;
        }
        return array;
    }

    removeAt(index) {


    }

    moveToFront(node) {
        var cur =node.data;
        while( node != this.head){
            node.data=node.prev.data;
            node=node.prev;
        }
        this.head.data = cur;
    }

    reorganize(data) {
        if(this.findNode(data)){
            this.moveToFront(this.findNode(data));
            return true;
        } else
            return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
