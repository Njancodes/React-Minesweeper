import Tile from "./Tile.jsx";
import { useRef } from "react";

function TileMaster(){

    const ref = useRef(0);

    let mines = 5
    let tiles = [];
    for(let x = 0; x < 9; x++){
        tiles[x] = [];    
        for(var y = 0; y < 9; y++){ 
            let rand = Math.random();
            
            if(rand < 0.1 && mines > 0){
                tiles[x][y] = -1;
                mines--;
            }else{
                tiles[x][y] = 0;
            }
        }    
    }

    checkNearByMines(tiles)



    const tileDivs = () => {
        let tileDivArr = []


        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                tileDivArr.push(<Tile key={Math.random() + i*j} type={tiles[i][j]} row={i} column={j}></Tile>)
            }
        }
        return tileDivArr
    }


    return(
        <div className="tile-container">
            {tileDivs()}
        </div>
    );
}

function checkNearByMines(tiles){
    let nearNeighbours = []

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){

            let toCheckObj = {
                row: 0,
                column: 0   
            }

            let abvCurr = 0
            let belCurr = 0
            let leftCurr = 0
            let rightCurr = 0

            let bLCurr = 0;
            let bRCurr = 0;
            let aLCurr = 0;
            let aRCurr = 0;

            
            let curr = tiles[i][j]

            if(curr == -1){
                console.log("Starting from here")

                let rowMaxValid = (i + 1) <= 8;
                let rowMinValid = (i - 1) >= 0;

                let colMaxValid = (j + 1) <= 8;
                let colMinValid = (j - 1) >= 0; 


                //The Tiles that are not on the border
                if(rowMinValid && rowMaxValid && colMaxValid && colMinValid){
                    nearNeighbours.push({
                        row: i + 1,
                        column: j + 1,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i - 1,
                        column: j - 1,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i - 1,
                        column: j + 1,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i + 1,
                        column: j - 1,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0,
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0,
                    })
                }


                //The tiles that are on the upper border
                if(!rowMinValid && colMaxValid && colMinValid){
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i + 1,
                        column: j + 1,
                        count: 0,
                    })     
                    nearNeighbours.push({
                        row: i + 1,
                        column: j - 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0,
                    })                                     
                }

                //The tiles that are on the lower border
                if(!rowMaxValid && colMaxValid && colMinValid){
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i - 1,
                        column: j + 1,
                        count: 0,
                    })     
                    nearNeighbours.push({
                        row: i - 1,
                        column: j - 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0,
                    })                    
                }

                //The tiles that are on the right border
                if(!colMaxValid && rowMaxValid && rowMinValid){
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0,
                    })     
                    nearNeighbours.push({
                        row: i - 1,
                        column: j - 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i + 1,
                        column: j - 1,
                        count: 0,
                    })                    
                }

                //The tiles at the left border
                if(!colMinValid && rowMaxValid && rowMinValid){
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0,
                    })     
                    nearNeighbours.push({
                        row: i - 1,
                        column: j + 1,
                        count: 0,
                    })                    
                    nearNeighbours.push({
                        row: i + 1,
                        column: j + 1,
                        count: 0,
                    })                    
                }

                //The tile at the upper left corner
                if(!rowMinValid && !colMinValid){
                    nearNeighbours.push({
                        row: i + 1,
                        column: j + 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0
                    })
                }

                //The tile at the upper right corner
                if(!rowMinValid && !colMaxValid){
                    nearNeighbours.push({
                        row: i + 1,
                        column: j - 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i + 1,
                        column: j,
                        count: 0
                    })
                }

                //The tile at the lower left corner
                if(!rowMaxValid && !colMinValid){
                    nearNeighbours.push({
                        row: i - 1,
                        column: j + 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j + 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0
                    })
                }

                //The tile at the lower right corner
                if(!rowMaxValid && !colMaxValid){
                    nearNeighbours.push({
                        row: i - 1,
                        column: j - 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i,
                        column: j - 1,
                        count: 0
                    })
                    nearNeighbours.push({
                        row: i - 1,
                        column: j,
                        count: 0
                    })
                }
            }
        }
    }

    let cleanNearNeighbours = nearNeighbours.filter((vale)=>{
        let curr = tiles[vale.row][vale.column]
        if(curr != -1){
            return vale
        }
    
    })

    cleanNearNeighbours.forEach((vale)=>{
        let count = 0;
        for (let i = 0; i < cleanNearNeighbours.length; i++) {
            if (cleanNearNeighbours[i].column == vale.column && cleanNearNeighbours[i].row == vale.row) {
                count++;
            }
        }
        vale.count = count
    })

    console.log(cleanNearNeighbours)

    let uniqNearNeighbours = [...new Set(cleanNearNeighbours)];

    uniqNearNeighbours.forEach((vale)=>{
        tiles[vale.row][vale.column] = vale.count;
    })


}

export default TileMaster;