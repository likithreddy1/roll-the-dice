finalScore1=0;
finalScore2=0;
target=30;
count=1;
rescount=0
function play(){
    if(count%2==1)
    {
        var player1 = (Math.floor(Math.random() * 10)%6)+1;
        finalScore1+=player1;
        document.getElementById("input1").value=finalScore1;
    }
    else
    {
        var player2 = (Math.floor(Math.random() * 10)%6)+1;
        finalScore2+=player2;
        document.getElementById("input2").value=finalScore2;
    }
    count++;
    if(finalScore1>=target)
    {
        if(rescount==0){
            document.getElementById("result").innerHTML="Player 1 is the winner";
            rescount++;
            
        }      
    }
    else if(finalScore2>=target)
    {
        if(rescount==0){
            document.getElementById("result").innerHTML="player 2 is the winner";
            rescount++;
        }
        
    }
}
