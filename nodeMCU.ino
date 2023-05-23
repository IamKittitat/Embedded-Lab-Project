#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <SoftwareSerial.h>

SoftwareSerial StmSerial(D7,D8); // RX | TX

char ssid[] = "Mowxidation";
const char *password = "embeddedProj";
const char *mqtt_server = "broker.netpie.io";
const int mqtt_port = 1883;
const char *mqtt_Client = "60cee2fb-bc61-419d-b135-4a15441b1fae";
const char *mqtt_username = "scKgosAagG4VjhJ2GiRFyFqY7QmCh75u";
const char *mqtt_password = "pBz8-K_pvmKzsqO)Zcmb59ybDKq77yp2";

char msg[100];
long lastMsg = 0;

WiFiClient espClient;
PubSubClient client(espClient);

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting NETPIE2020 connection…");
    if (client.connect(mqtt_Client, mqtt_username, mqtt_password)) {
      Serial.println("NETPIE2020 connected");
      // Subscribe Here!
      client.subscribe("@msg/command");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println("try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char *topic, byte *payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String message;
  for (int i = 0; i < length; i++) {
    message = message + (char)payload[i];
  }
  Serial.println(message);

  if (String(topic) == "@msg/command") {
    // Send signal to stm32 or do something
    Serial.println("Command arrived!");
    if(message == "fetch"){
      Serial.println("fetch!");
      Serial.println("The board is fetching data!");
      StmSerial.write("F");
    } else if (message == "water"){
      Serial.println("water!");
      Serial.println("The board is watering!");
      StmSerial.write("W");
    }
  }
}

void setup() {

  //Set pin for receiving data from Nucleo401
  pinMode(D7,INPUT);
  pinMode(D8,OUTPUT);
  StmSerial.begin(9600);


  // nodeMcu Baud rate is 9600
  Serial.begin(9600);
  delay(2000);
  Serial.println("Starting...");
  delay(2000);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println("  Connected!");
  Serial.println(WiFi.localIP());
  WiFi.setAutoReconnect(true);
  WiFi.persistent(true);
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected())
  {
      reconnect();
  }
  client.loop();

  if(StmSerial.available()){
    String receivedData = StmSerial.readString();
    Serial.print("Recieved data from STM : ");
    Serial.println(receivedData);
    receivedData.toCharArray(msg,(receivedData.length() +1));
    if(strlen(msg)<4){
      client.publish("@msg/command","fetch");
    } else {
      client.publish("@msg/data",msg);
    }

  }

}
