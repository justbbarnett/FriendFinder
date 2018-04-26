//require path for location, and friends for the data
const path = require ('path');
const friends = require ('../data/friends');

//the function to export
var api = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res){
        var newFriend = req.body;
        var similarities;
        var similaritiesArr = [];

        friends.forEach (friend => {
            let similarityScore = 0;

            for ( var i = 0; i < friend.scores.length; i++) {
                similarityScore += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
            };

            similaritiesArr.push({
                name: friend.name,
                score : similarityScore
            });
        })

        let matchedFriend = similaritiesArr.reduce( (carry, next) => {
            if( carry.score < next.score )
                return carry;
            else
                return next;
        })
        

        console.log (matchedFriend)

        




    })



}

module.exports = api;