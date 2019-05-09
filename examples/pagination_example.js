require('dotenv').config();

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_TOKEN,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
// https://developer.twitter.com/docs/things-every-developer-should-know
client.get('search/tweets', {q: '@vox_es', until:'2019-05-01', count:100}, function(error, tweets, response) {
    tweets.statuses.forEach(function(tweet) {
        console.log("tweet:")
        console.log("TEXT:  " + tweet.text);
        console.log("FROM:  " + tweet.user.screen_name);
        console.log("CREATED:  " +tweet.created_at);
        //console.log(tweet);
    });
    console.log("-------------------__");
    const nextResults = tweets.search_metadata.next_results;
    console.log(nextResults);
    const maxId = nextResults.split("=")[1].split("&")[0];
    console.log(maxId)

    client.get('search/tweets', {q: '@vox_es', until:'2019-05-01', count:100, max_id: maxId}, function(error, tweets, response) {
        tweets.statuses.forEach(function(tweet) {
            console.log("tweet:")
            console.log("TEXT:  " + tweet.text);
            console.log("FROM:  " + tweet.user.screen_name);
            console.log("CREATED:  " +tweet.created_at);
            //console.log(tweet);
        });
    });
});
