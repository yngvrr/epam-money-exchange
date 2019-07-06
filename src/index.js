// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

//50, 25, 10, 5, 1  H, Q, D, N and P

const H = 50
const Q = 25
const D = 10
const N= 5
const P = 1 

if(currency > 10000){
return {error: "You are rich, my friend! We don't have so much coins for exchange"};
}
else
{   
    var exchangedcoins = {};
    if(currency >= H){
       var coin = Math.floor(currency/ H);
       currency = currency - coin*H;
        exchangedcoins['H'] = coin;
    }
     if (currency >= Q)
    {
        var coin = Math.floor(currency/ Q);
       currency = currency - coin*Q;
        exchangedcoins['Q'] = coin;
    }
     if(currency >= D)
    {
        var coin = Math.floor(currency/ D);
       currency = currency - coin*D;
        exchangedcoins['D'] = coin;
    }
     if(currency>= N)
    {
        var coin = Math.floor(currency/ N);
              currency = currency - coin*N;
        exchangedcoins['N'] = coin;
    }
     if(currency>=P)
    {
        var coin = Math.floor(currency/ P);
       currency = currency - coin*P;
        exchangedcoins['P'] = coin;
    }

    return exchangedcoins;
}
}
