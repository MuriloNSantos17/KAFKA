const kafka = require("kafka-node");

const client = new kafka.KafkaClient({kafkaHost: "localhost:9092"});
const consumer = new kafka.Consumer( client, [{ topic: "tweets-the-last-of-us", partition: 0 }] );

const tweetsBons = [];
const tweetsRuins = [];

consumer.on("message", async function(message) {
  console.log(message)

  var tweet = String(message.value);

  if(tweet.includes('bom') || tweet.includes('boas')){
    tweetsBons.push(tweet);
  }else if(tweet.includes('Não') || tweet.includes('Não funcionou')){
    tweetsRuins.push(tweet);
  }

  console.log('Mensagens boas: ');
  console.log(tweetsBons);

  console.log('Mensagens ruins');
  console.log(tweetsRuins);
  

});