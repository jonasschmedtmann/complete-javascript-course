const scoreForFirstMatchDolphins=97,scoreForSecondMatchDolphins=112,scoreForThirdMatchDolphins=101;
const scoreForFirstMatchKoalas=109,scoreForSecondMatchKoalas=95,scoreForThirdMatchKoalas=106;


// BONUS 
if((scoreForFirstMatchDolphins > scoreForFirstMatchKoalas))
{
    if(scoreForFirstMatchDolphins > 100)
    {
        console.log(`Dolphins win the first game with score ${scoreForFirstMatchDolphins}`);
    }
}
else if(scoreForFirstMatchDolphins < scoreForFirstMatchKoalas)
{
    if(scoreForFirstMatchKoalas > 100)
    {
        console.log(`Koalas win the first game with score ${scoreForFirstMatchKoalas}`);
    }
}
else
{
    if(scoreForFirstMatchDolphins>100)
    {
        console.log(`Match drawn with score ${scoreForFirstMatchDolphins}`);
    }
}

if((scoreForSecondMatchDolphins > scoreForSecondMatchKoalas))
{
    if(scoreForSecondMatchDolphins > 100)
    {
        console.log(`Dolphins win the second game with score ${scoreForSecondMatchDolphins}`);
    }
}
else if(scoreForSecondMatchDolphins < scoreForSecondMatchKoalas)
{
    if(scoreForSecondMatchKoalas > 100)
    {
        console.log(`Koalas win the second game with score ${scoreForSecondMatchKoalas}`);
    }
}
else
{
    if(scoreForSecondMatchDolphins>100)
    {
        console.log(`Match drawn with score ${scoreForSecondMatchDolphins}`);
    }
}

if((scoreForThirdMatchDolphins > scoreForThirdMatchKoalas))
{
    if(scoreForThirdMatchDolphins > 100)
    {
        console.log(`Dolphins win the third game with score ${scoreForThirdMatchDolphins}`);
    }
}
else if(scoreForThirdMatchDolphins < scoreForThirdMatchKoalas)
{
    if(scoreForThirdMatchKoalas > 100)
    {
        console.log(`Koalas win the third game with score ${scoreForThirdMatchKoalas}`);
    }
}
else
{
    if(scoreForThirdMatchDolphins>100)
    {
        console.log(`Match drawn with score ${scoreForThirdMatchDolphins}`);
    }
}

const averageForDolphins = (scoreForFirstMatchDolphins+scoreForSecondMatchDolphins+scoreForThirdMatchDolphins)/3;
const averageForKoalas = (scoreForFirstMatchKoalas+scoreForSecondMatchKoalas+scoreForThirdMatchKoalas)/3;
if( averageForDolphins > averageForKoalas )
{
    console.log(`Dolphins win the tournament with average score ${averageForDolphins}`);
}
else if (averageForKoalas > averageForDolphins)
{
    console.log(`Koalas win the tournament with average score ${averageForKoalas}`);
}
else
{
    console.log(`Tournament drawn with both having average score ${averageForDolphins}`);
}