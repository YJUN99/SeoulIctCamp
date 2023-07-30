// 5분 후에 프로그램 종료
setTimeout(() => {
    console.log("5분이 지났습니다. 프로그램을 종료합니다.");
    process.exit();
}, 5 * 60 * 1000); // 5분을 밀리초로 변환

/*
    전역변수 
*/
let prevPlayer = ' ○';
let nowPlayer = ' ○';
let count = 0;
let Omok_Board = new Array(31);

for(let i = 0; i < 31; i++){
    Omok_Board[i] = new Array(31);
}
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

let Indicator_Section = new Array(8);

const readline = require('readline');

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function func_is_black_turn(){
    return count % 2 ? 1 : 0;
}

function func_placeStone(_inputX,_inputY){
    if(!(Omok_Board[_inputY][_inputX] == ' +')){    // 이미 돌이 존재하면
        func_set_indicator("already_placed");
        return 0;
    }
    else{
        Omok_Board[_inputY][_inputX] = nowPlayer;
        count++;
        func_set_indicator("placeOmok", _inputX, _inputY);
        return 1;
    }
}


const direction = [[-1, 0], [-1,1], [0,1], [1,1], [1, 0], [1,-1], [0,-1],[-1, -1]];

function func_isOmok(_inputX, _inputY){
    let omokCount = 0;
    let curX;
    let curY;
    let OmokCountArray = new Array(4);
    for(let i = 0; i < 4; i++){
        omokCount = 0;
        curY = _inputY;
        curX = _inputX;
        while(curY > 0 && curY < 31 && curX > 0 && curX < 31 && nowPlayer == Omok_Board[curY][curX]){
            curY += direction[i][0];
            curX += direction[i][1];
            omokCount += 1;
        }
        omokCount -= 1; // 방금 돌을 둔 곳은 위에서 ++ 했으므로
        curY = _inputY;
        curX = _inputX;
        while(curY > 0 && curY < 31 && curX > 0 && curX < 31 && nowPlayer == Omok_Board[curY][curX]){
            curY += direction[i + 4][0];
            curX += direction[i + 4][1];
            omokCount += 1;
        }
        OmokCountArray[i] = omokCount;
        if(omokCount == 5){
            func_set_indicator("win");
            return 1;
        }
    }
    func_set_indicator("isOmok", _inputX, _inputY, OmokCountArray);
    return 0;
}

function func_print_Omok_Board(){
    console.clear();
    for(let i = 0; i < 8 ; i++){
        console.log(Indicator_Section[i]);
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

function func_set_indicator(flag, _input_X, _input_Y, _OmokCount){
    Indicator_Section[0] = Indicator_Section[7] = "############################################################"
    switch (flag){
        case "init":
            Indicator_Section[1] = "선공은 ○ 부터입니다. !!!"
            Indicator_Section[2] = "6목 허용 X, 쌍3, 쌍4 허용"
            Indicator_Section[3] = "";
            Indicator_Section[4] = "기본 입력은 형식은 다음과 같습니다. (X 좌표, Y 좌표)  예시:(K,12) "
            Indicator_Section[5] = "괄호를 빼먹지 마세요 ( )"
            Indicator_Section[6] = `지금은 ${nowPlayer} 차례 입니다.`
            break;
        case "already_placed":
            Indicator_Section[1] = ""
            Indicator_Section[2] = "해당 지점에 돌이 이미 존재합니다."
            Indicator_Section[3] = ""
            Indicator_Section[4] = ""
            Indicator_Section[5] = ""
            Indicator_Section[6] = `지금은${nowPlayer} 차례 입니다.`
            break;
        case "win":
            Indicator_Section[1]="";
            Indicator_Section[2]="";
            Indicator_Section[3]="";
            Indicator_Section[4]=`          ${nowPlayer}의 승리~~          `;
            Indicator_Section[5]="";
            Indicator_Section[6]="";
            process.exit();
            break;
        case "placeOmok":
            const ASCIIX = (_input_X >= 1 && _input_X) < 26 ? String.fromCharCode(_input_X + 64) : String.fromCharCode(_input_X + 64 + 6);
            Indicator_Section[1]=`${nowPlayer}가 방금 둔 좌표는 (${ASCIIX},${_input_Y})`;
            Indicator_Section[2]="";
            Indicator_Section[3]="";
            Indicator_Section[4]="";
            Indicator_Section[5]="";
            Indicator_Section[6]=`지금은${prevPlayer} 차례 입니다.`
            break;
        case "isOmok":
            const _ASCIIX = (_input_X >= 1 && _input_X) < 26 ? String.fromCharCode(_input_X + 64) : String.fromCharCode(_input_X + 64 + 6);
            Indicator_Section[1]=`${nowPlayer}가 방금 둔 좌표는 (${_ASCIIX},${_input_Y})`;
            Indicator_Section[2]=`상하 : ${_OmokCount[0]}`;
            Indicator_Section[3]=`우상 : ${_OmokCount[1]}`;
            Indicator_Section[4]=`좌우 : ${_OmokCount[2]}`;
            Indicator_Section[5]=`좌상 : ${_OmokCount[3]}`;
            Indicator_Section[6]=`지금은${prevPlayer} 차례 입니다.`
            break;
        default:
            break;
    }
}

console.clear();
func_set_indicator("init");
func_print_Omok_Board();

r1.on('line',(input) => {
    const parsedInput = input.slice(1,-1).split(',');

    let inputX_str = parsedInput[0];
    let inputY_str = parsedInput[1];
    inputX_str = inputX_str.charCodeAt(0);  // ASCII to Number
    
    const inputX = (inputX_str >= 65 && inputX_str <= 90) ? inputX_str - 64 : inputX_str - 96 + 26; // Input X 는 A~Z a~e 까지 1~30 으로 매핑
    const inputY = parseInt(inputY_str);

    prevPlayer = func_is_black_turn() ? ' ○' : ' ●';
    nowPlayer = func_is_black_turn() ? ' ●' : ' ○';

    if(func_placeStone(inputX,inputY)){
        func_isOmok(inputX, inputY);
    }
    func_print_Omok_Board();
})
