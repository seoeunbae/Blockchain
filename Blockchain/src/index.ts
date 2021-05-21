import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash : string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (//static메소드는 객체생성안하고 함수에 접근,사용할수있는것
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
        ):string =>
         CryptoJS.SHA256(index + previousHash + timestamp + data).tostring();
    static validateStructure = ()
    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
        ){
            this. index= index;
            this. hash = hash;
            this .previousHash = previousHash;
            this. data = data;
            this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0,"20202020202","","Hello",123456);

let blockchain : [Block] //array of blocks [클래스명] ,객체배열인가,,,,??
= [genesisBlock];//array of genesisBlock
const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = (): Block =>blockchain[blockchain.length -1];

const getNewTimeStamp = (): number=> Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string): Block => {
    const previousBlock : Block = getLatestBlock();
    const newIndex: number = previousBlock.index +  1;
    const newTimestamp: number = getNewTimeStamp();
    const nextHash : string = Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data);
    const newBlock : Block = new Block(newIndex, nextHash,previousBlock.hash,data,newTimestamp);
    return newBlock;
};
const isBlockValue = (candidateBlock : Block, previousBlock:Block): boolean=>{
    if()
}

console.log(createNewBlock("hello"),createNewBlock("bye bye"));

export {}; // 이 파일을 모듈이라고 해줌

//인터페이스쓰는게 더 안전하지만, 노드제이에스쓰려면 class사용해야함