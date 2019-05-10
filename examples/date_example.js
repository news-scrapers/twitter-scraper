require('dotenv').config();

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_TOKEN,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
// https://developer.twitter.com/docs/things-every-developer-should-know
//#suicidio geocode:42.4,-3.7,1000km since:2019-05-01 until:2019-05-02

client.get('search/tweets', {q: '@vox_es', until:'2019-05-01'}, function(error, tweets, response) {
    console.log(tweets);
    tweets.statuses.forEach(function(tweet) {
        console.log("tweet:")
        console.log("TEXT:  " + tweet.text);
        console.log("FROM:  " + tweet.user.screen_name);
        console.log("CREATED:  " +tweet.created_at);
        //console.log(tweet);
    });
});
