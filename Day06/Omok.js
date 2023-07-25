// 오목판 배열 생성
let Omok_Board = new Array(31);
for(let i = 0; i < 31; i++){
    Omok_Board[i] = new Array(31);
}

// 오목판 init
Omok_Board[0][0] = '┌'.padStart(2,' ')

for(let i = 1; i < 31; i++){
    let ASCII = 64 + i;
    if(ASCII > 90){
        Omok_Board[0][i] = String.fromCharCode(ASCII + 6).padStart(2,' ');
    }
    else{
        Omok_Board[0][i] = String.fromCharCode(ASCII).padStart(2,' ');
    }
    Omok_Board[i][0] = i.toString().padStart(2,' ');
}

for(let i = 1; i < 31; i++){
    for(let j = 1; j < 31; j++){
        Omok_Board[i][j] = '+'.padStart(2,' ');
    }
}


// 현재 누구의 순서인지 return 1 : 검은색 
//                    return 0 : 흰색
function func_is_black_turn(){
    return count % 2 ? 1 : 0;
}

// 순서에 따라 돌을 놓습니다.
function func_placeStone(_input_X,_input_Y){
    const StoneColor = func_is_black_turn() ? '○' : '●';
    Omok_Board[_input_Y][_input_X] = StoneColor.padStart(2,' ');
}

// 오목인지 판별하는 함수
function func_isOmok(_inputX,_inputY){
    let StoneColor = func_is_black_turn() ? '○' : '●';
    StoneColor = StoneColor.padStart(2,' ');

    // Omok_Detection 함수 호출 
    const win_flag = func_Omok_Detection(_inputX, _inputY, StoneColor);
    return win_flag == 1 ? StoneColor : -1;
}

// 오목판별을 위한 masking 
const direction = [[-1, 0], [-1,1], [0,1], [1,1], [1, 0], [1,-1], [0,-1],[-1, -1]];

function func_Omok_Detection(_inputX, _inputY, StoneColor){
    let omokCount = 0;
    let curX;
    let curY;
    let win_flag = 0;
    let direction_str;
    for(let i = 0; i < 4; i++){
        omokCount = 0;
        curY = _inputY;
        curX = _inputX;
        while(curY > 0 && curY < 31 && curX > 0 && curX < 31 && StoneColor == Omok_Board[curY][curX]){
            curY += direction[i][0];
            curX += direction[i][1];
            omokCount += 1;
        }
        omokCount -= 1;
        curY = _inputY;
        curX = _inputX;
        while(curY > 0 && curY < 31 && curX > 0 && curX < 31 && StoneColor == Omok_Board[curY][curX]){
            curY += direction[i + 4][0];
            curX += direction[i + 4][1];
            omokCount += 1;
        }
        switch (i){
            case 0:
                direction_str = "상하"
                break;
            case 1:
                direction_str = "우상"
                break;
            case 2:
                direction_str = "좌우"
                break;
            case 3:
                direction_str = "좌상"
                break;
            default:
                break;
        }
        indicator_section[i + 2] = `${direction_str} 오목카운트: ${omokCount}`
        if(omokCount == 5){
            win_flag = 1;
            indicator_section[1]="";
            indicator_section[2]="";
            indicator_section[3]="";
            indicator_section[4]=`          ${StoneColor}의 승리~~          `;
            indicator_section[5]="";
            indicator_section[6]="";

            return win_flag;
        }
    }
    return win_flag;
}

let indicator_section = new Array(8);
indicator_section[0] = "##################################################";
indicator_section[7] = "##################################################";
function func_print_Omok_Board(){
    console.clear();
    for(let i = 0; i < 8; i++){
        console.log(indicator_section[i]);
    }
    let boardLine = "";
    for(let i = 0; i < 31; i++){
        boardLine = "";
        for(let j = 0; j < 31; j++){
            boardLine += Omok_Board[i][j];
        }
        console.log(boardLine);
        
    }
}


let count = 0;
console.clear();
indicator_section[1] = "선공은 ● 부터입니다. !!!"
indicator_section[2] = "6목 허용 X, 쌍3, 쌍4 허용"
indicator_section[3] = "";
indicator_section[4] = "기본 입력은 형식은 다음과 같습니다. (X 좌표, Y 좌표)  예시:(K,12) "
indicator_section[5] = "괄호를 빼먹지 마세요 ( )"
indicator_section[6] = "지금은 ● 차례 입니다."
func_print_Omok_Board();

// 사용자 입출력을 위한 코드
const readline = require('readline');

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

r1.on('line',(input)=>{
    console.clear();

    //console.log("┌-------------------------------┐")
    const parsedInput = input.slice(1,-1).split(',');
    let inputX_str = parsedInput[0];
    const inputY_str = parsedInput[1];
    
    let inputX = inputX_str.charCodeAt(0);
    inputX = (inputX >= 65 && inputX <= 90) ? inputX - 64 : inputX - 96 + 26;
    const inputY = parseInt(inputY_str);

    const curSymbol = func_is_black_turn() ? ' ○' : ' ●';
    const next_curSymbol = func_is_black_turn() ? ' ●' : ' ○';
    indicator_section[1] = curSymbol + " 가 " + "입력한 좌표" + input;
    if(Omok_Board[inputY][inputX] != ' +'){
        indicator_section[1] = ""
        indicator_section[2] = "해당 지점에 돌이 이미 존재합니다."
        indicator_section[3] = ""
        indicator_section[4] = ""
        indicator_section[5] = ""
        indicator_section[6] = `지금은${curSymbol} 차례 입니다.`

        func_print_Omok_Board();
    }
    else{
        indicator_section[6] = `지금은${next_curSymbol} 차례 입니다.`
        func_placeStone(inputX,inputY);
        func_isOmok(inputX, inputY);
        func_print_Omok_Board();
        console.log("다음 돌을 놓을 위치를 입력하세요. 예) (K,12)");
        count++;
        if(count == 30*30){
            r1.close();
        }
    }
});

// 5분 후에 프로그램 종료
setTimeout(() => {
    console.log("5분이 지났습니다. 프로그램을 종료합니다.");
    process.exit();
}, 5 * 60 * 1000); // 5분을 밀리초로 변환