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
       /*
         if (this.length == 1) {
         this.head = null;
         this.head.next= head;
         this.head.next.prev = null;
         }*/
        /*if (index) {
            var oldHead = this.head;
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead = null;
        }

        if(index === this.length-1){
            var oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
        }

         var count = 0;
         var cur = this.head;
         while (count < index){
         count++;
         cur = cur.next;
         }

        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        cur.next = null;
        cur.prev = null;

        this.length--;*/
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
