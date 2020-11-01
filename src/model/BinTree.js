export class BinTree{

    constructor(){
        this.root = null;
    }

    /*
     Add a node to the binary tree
    */
    add(data){
      if(!this.root){
          this.root = new Node(data);
      }else{
          this._addHelper(this.root, data);
      }
    }

    _addHelper(n, v){
        if(n.data == v) throw Error(`Node with this value (${n.data}) already present`);
        if(v < n.data){
            n.leftChild == null ? n.leftChild = new Node(v) : this._addHelper(n.leftChild, v);
        }else{
            n.rightChild == null? n.rightChild = new Node(v): this._addHelper(n.rightChild, v);
        }    
    }

    /* Traverse */
    traverse(n, v){
        if(v < n.data){
            if(n.leftChild !== null){
                this.traverse(n.leftChild, v);
            } else{
                return n;
            }
        }else{
            if(n.rightChild !== null){
                this.traverse(n.rightChild, v);
            }else{
                return n;
            }
        }   
    }

}

class Node{

    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}
