export class BinTree{

    constructor(){
        this.root = null;
    }

    /* 
       Finds a certain Node.
       Returns an object containing the node itself (or null), the parent node and the
       information whether the 'node' is the right or left child of the parent node.

       This function can be used as a helper function to find, insert and delete nodes.
        Find: 'node' is null if not present or contains the node itself (Simple null-check)
        insert: Check if node is not null and the insert a new node from parent node as the left or right
                child depending on 'leftChild' boolean flag.
        delete: Check if node is not null and got the parent not with the information of left or right child
     */
    traverse(n, v){
        let found = false;
        const result = {node: n, parent: null, leftChild: false};
        while(!found && result.node !== null){
            if(v === n.data){
                found = true;
            }else if(v < n.data){
                result.leftChild = true;
                n = n.leftChild;
                result.parent = result.node;
            }else{
                result.leftChild = false;
                n = n.rightChild;
                result.parent = result.node;
            }
            result.node = n;
        }
        return result;
    }

    /*
     Adds a node to the binary tree.
    */
    insert(data){
      if(!this.root){
          this.root = new Node(data);
      }else{
          this._insertHelperTraverse(this.root, data);
      }
    }

    /*
        Recursive Helper
     */
    _inserHelper(n, v){
        if(n.data == v) throw Error(`Node with this value (${n.data}) already present`);
        if(v < n.data){
            n.leftChild == null ? n.leftChild = new Node(v) : this._inserHelper(n.leftChild, v);
        }else{
            n.rightChild == null? n.rightChild = new Node(v): this._inserHelper(n.rightChild, v);
        }    
    }
    
    /*
        Iterative Helper
    */
    _insertHelperTraverse(n,v){
        const traverseResult = this.traverse(n,v);
        if(traverseResult.node !== null){
            console.error(`Node with this value (${v}) already present`);
        }else{
            traverseResult.leftChild ? traverseResult.parent.leftChild = new Node(v) : traverseResult.parent.rightChild = new Node(v);
        }
    }
    
    countNodes(){
        return this._countHelper(this.root);
    }

    _countHelper(n){
        if(!n) return 0;
        return this._countHelper(n.leftChild) + this._countHelper(n.rightChild) + 1;
    }

    find(v){
        return this.traverse(this.root, v);
    }
}

class Node{

    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}
