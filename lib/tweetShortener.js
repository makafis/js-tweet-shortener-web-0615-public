'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/(^|\s)hello(\s|$)/g, "hi");
    tweet = tweet.replace(/(^|\s)to(\s|$)/g, " 2 ");
    tweet = tweet.replace(/(^|\s)two(\s|$)/g, " 2 ");
    tweet = tweet.replace(/(^|\s)too(\s|$)/g, " 2 ");
    tweet = tweet.replace(/(^|\s)be(\s|$)/g, " b ");
    tweet = tweet.replace(/(^|\s)you(\s|$)/g, " u ");
    tweet = tweet.replace(/(^|\s)at(\s|$)/g, " @ ");
    tweet = tweet.replace(/(^|\s)for(\s|$)/g, " 4 ");
    tweet = tweet.replace(/(^|\s)For(\s|$)/g, " 4 ");
    tweet = tweet.replace(/(^|\s)four(\s|$)/g, " 4 ");
    tweet = tweet.replace(/(^|\s)and(\s|$)/g, " & ");
    return tweet;
  },
  bulkShortener: function(tweetArray){
    var newArray = tweetArray.map( function(item){
      return tweetShortener.wordSubstituter(item);
    })
    return newArray;
  },
  selectiveShortener: function(tweet){
    var x = tweet.length;
    if (x > 140){
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){ 
      // var x = tweet.length
      if(tweet.length >  140){
        tweet = tweetShortener.wordSubstituter(tweet);
        tweet = tweet.substr(0, 137) + '...';
        return tweet;

      } else {
      return tweet;
    }
  },
};


// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"
