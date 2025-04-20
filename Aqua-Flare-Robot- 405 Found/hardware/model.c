#include <SoftwareSerial.h>
SoftwareSerial Sgsm(12, 13); // 12TX,13RX

// Servo myservo;
// int pos = 0;

int relay = 11;
int motor1pin1 = 2;
int motor1pin2 = 3;

int motor2pin1 = 4;
int motor2pin2 = 5;

int flame_sensor = 6;
int flame_sensor1 = 7;
int flame_sensor2 = 8;
int gas_sensor = A0;

void setup()
{
    pinMode(motor1pin1, OUTPUT);
    pinMode(motor1pin2, OUTPUT);
    pinMode(motor2pin1, OUTPUT);
    pinMode(motor2pin2, OUTPUT);

    pinMode(flame_sensor, INPUT);
    pinMode(flame_sensor1, INPUT);
    pinMode(flame_sensor2, INPUT);
    pinMode(gas_sensor, INPUT);

    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    pinMode(relay, OUTPUT);

    // myservo.attach(11);
    Sgsm.begin(9600);
    Serial.begin(9600);
}

void loop()
{
    analogWrite(9, 250);  // ENA   pin
    analogWrite(10, 250); // ENB pin
    int value = digitalRead(6);
    Serial.println(value);
    int value1 = digitalRead(7);
    Serial.println(value1);
    int value2 = digitalRead(8);
    Serial.println(value2);
    int value3 = analogRead(A0);
    Serial.println(value3);
    delay(1000);
    if (value == LOW)
    {
        forward();
    }
    if (value1 == LOW)
    {
        rightmove();
    }
    if (value2 == LOW)
    {
        leftmove();
    }
    if (value3 > 130)
    {
        sendmsg();
    }
    else
    {
        digitalWrite(motor1pin1, LOW);
        digitalWrite(motor1pin2, LOW);

        digitalWrite(motor2pin1, LOW);
        digitalWrite(motor2pin2, LOW);
        digitalWrite(relay, HIGH);
    }
}

void forward()
{
    digitalWrite(motor1pin1, HIGH);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, HIGH);
    digitalWrite(motor2pin2, LOW);
    delay(4000);

    digitalWrite(motor1pin1, LOW);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, LOW);
    digitalWrite(motor2pin2, LOW);

    digitalWrite(relay, LOW);
    delay(4000);
    makeCall();

    /*Sgsm.print("AT+CMGF=1\r");
      delay(1000);
      //Sgsm.print("AT+CMGS=\"+917865994154\"\r");
      Sgsm.println("ATD+ +917865994154;");
      delay(1000);
      Sgsm.println("Fire detected.Please take necessary action");
      delay(1000);
      Sgsm.write(0x1A);
      delay(1000);*/
}

void rightmove()
{
    digitalWrite(motor1pin1, HIGH);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, LOW);
    digitalWrite(motor2pin2, LOW);
    delay(4000);
    digitalWrite(motor1pin1, LOW);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, LOW);
    digitalWrite(motor2pin2, LOW);

    digitalWrite(relay, LOW);
    delay(4000);
    makeCall();

    /*Sgsm.print("AT+CMGF=1\r");
      delay(1000);
      Sgsm.print("AT+CMGS=\"+917865994154\"\r");
      Sgsm.print("ATD++917865994154;\r");
      delay(1000);
      Sgsm.println("Fire detected.Please take necessary action");
      delay(1000);
      Sgsm.write(0x1A);
      delay(1000);*/
}

void leftmove()
{
    digitalWrite(motor1pin1, LOW);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, HIGH);
    digitalWrite(motor2pin2, LOW);
    delay(4000);

    digitalWrite(motor1pin1, LOW);
    digitalWrite(motor1pin2, LOW);
    digitalWrite(motor2pin1, LOW);
    digitalWrite(motor2pin2, LOW);
    digitalWrite(relay, LOW);
    delay(4000);
    makeCall();

    /*Sgsm.print("AT+CMGF=1\r");
      delay(1000);
      Sgsm.print("AT+CMGS=\"+917865994154\"\r");
      Sgsm.print("ATD++917865994154;\r");
      delay(1000);
      Sgsm.println("Fire detected.Please take necessary action");
      delay(1000);
      Sgsm.write(0x1A);
      delay(1000); */
}
void sendmsg()
{
    Sgsm.print("AT+CMGF=1\r");
    delay(1000);
    Sgsm.print("AT+CMGS=\"+919832030883\"\r");
    Sgsm.print("ATD++919832030883;\r");
    delay(1000);
    Sgsm.println("Harmfull gas detected please take necessary action");
    delay(1000);
    Sgsm.write(0x1A);
    delay(1000);
}
void makeCall()
{
    Sgsm.println("ATD+919832030883;"); // Replace with your phone number
    delay(1000);
}