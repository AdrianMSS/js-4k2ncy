//MQTT Control
var client = new Paho.MQTT.Client("m10.cloudmqtt.com", 34077, "myclientid_" + parseInt(Math.random() * 100, 10));
 
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

var options = {
  useSSL: true,
  userName:'owqhlrel', 
  password:'LAuKYqnFO9cM',
  onSuccess:onConnect,
  onFailure:doFail,
  mqttVersion:4
}

function mqttConnect() {
  client.connect(options);
};

//mqttConnect();


function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log('GO!');
  client.subscribe("#");
}

function doFail(e){
  console.log(e);  
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    client.connect(options);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  var msgTopic = message.destinationName.split('/')[0];
  var msgSubtopic = message.destinationName.split('/')[1];
  var msgJson = JSON.parse(message.payloadString);
  
  console.log(msgJson);
  console.log(msgJson);
  if(msgTopic == 'humidity'){  
    var dynamicNumber = document.getElementById("dynamicNumber");
    var dynamicProgress = document.getElementById("dynamicProgress");
    var randomNumber = parseInt(Math.random() * 100, 10);
    dynamicNumber.innerHTML = randomNumber;
    dynamicProgress.style = "width:"+randomNumber+"%;";
  }
  
}

//Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
var publish = function (payload, topic, qos) {
  var message = new Paho.MQTT.Message(payload);
  message.destinationName = topic;
  client.send(message);
}
