# Aqua-Flare-Robot-The-Smart-AI-Powered-Fire-Safety-Assistant
  
Aqua Flare Robot 🚒🔥💧
Overview
Aqua Flare is a smart fire-fighting robot designed to detect and extinguish fires autonomously. It uses flame sensors, a water pump, a GSM module, and high-definition cameras to ensure quick response, alert the owner, and provide real-time monitoring. The robot is ideal for industrial, commercial, and home safety applications.

Features
✅ Automatic Fire Detection: Uses three flame sensors (left, right, and middle) to detect fire.
✅ Autonomous Fire Extinguishing: Moves towards the fire and sprays water automatically.
✅ Owner Alert via GSM Call: Sends an emergency call within 5 seconds of fire detection.
✅ Gas Detection & Alert: Detects harmful gases (CNG, Methane, Carbon Monoxide) and sends an SMS alert.
✅ Live Video Monitoring: Equipped with HD cameras to provide a real-time video feed.

How It Works


Step 1: Power On
Turn on the 12V adapters:
2A adapter for the GSM module
1A adapters (2 pieces) for the motor driver and Arduino UNO

Step 2: Fire Detection & Movement
The robot continuously scans for fire using flame sensors.
If fire is detected, it automatically moves towards the source.

Step 3: Water Spraying Mechanism
The relay module activates the pump motor, which sprays water to extinguish the fire.

Step 4: GSM Call Alert
The GSM module triggers a call to the owner within 5 seconds to notify them of the fire.

Step 5: Gas Detection & SMS Alert
If dangerous gases are detected, an SMS alert is sent to the owner's phone.

Step 6: Live Video Monitoring
The robot streams a live video feed via HD cameras, enabling real-time monitoring.


Components Used : 

Arduino UNO (Microcontroller)
Flame Sensors (Left, Right, Middle)
Relay Module (To control the water pump)
Water Pump & Tank
GSM Module (For calling and SMS alerts)
Gas Sensor (To detect harmful gases)
HD Camera Module (For live video streaming)
Motor Driver & Wheels (For movement)
12V Adapters (Power Supply)
Installation & Setup
Connect all components as per the circuit diagram.
Upload the Arduino code to the Arduino UNO.
Ensure the GSM module is inserted with a working SIM card.
Power on the robot using the 12V adapters.
The robot will now automatically detect and respond to fire incidents.

Future Enhancements:

🔹 Integrate AI-based fire detection using thermal imaging.
🔹 Implement automatic path planning for better navigation.
🔹 Add IoT connectivity for remote access and cloud alerts.

Contributing
We welcome contributions! Feel free to fork the repository, create a new branch, and submit a pull request.

License
This project is open-source and available under the MIT License.

💡 Aqua Flare Robot – Your Smart Firefighter 🚀🔥
