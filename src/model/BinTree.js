export class BinTree{

    constructor(){
        this.root = null;
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
        if(traverseResult.found){
            console.error(`Node with this value (${v}) already present`);
        }else{
            traverseResult.insertLeft ? traverseResult.node.leftChild = new Node(v) : traverseResult.node.rightChild = new Node(v);
        }
    }
    /* 
        Finds the element in the tree.
        'found' indicates if the element is present in the tree.
        If the node is not present in the tree, the last not-null node
        of the traverse process is returned ('node') with the information whether to
        insert as left or right child ('insertLeft').
     */
    traverse(n, v){
        const result = {found: false, node: n, insertLeft: false};
        while(!result.found && n !== null){
            result.node = n;
            if(v === n.data){
                result.found = true;
                result.insertLeft = null;
            }else if(v < n.data){
                result.insertLeft = true;
                n = n.leftChild;
            }else{
                result.insertLeft = false;
                n = n.rightChild;
            }
        }
        return result;
    }

    countNodes(){
        return this._countHelper(this.root);
    }

    _countHelper(n){
        if(!n) return 0;
        return this._countHelper(n.leftChild) + this._countHelper(n.rightChild) + 1;
    }
}

class Node{

    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}
