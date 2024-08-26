# Customized WiFi Config Application

This README provides detailed steps to set up and run a customized WiFi configuration application on a Raspberry Pi. The process involves flashing a specific OS image, installing Node.js, and deploying the application.

## Prerequisites

- Raspberry Pi (any model with WiFi capability)
- MicroSD card (8GB or larger)
- Internet connection
- Computer with SD card reader

## Setup Instructions

### 1. Flash the Raspberry Pi with Comitup Image

1. Download the Comitup image from the official repository:
   - [Comitup Image URL](https://davesteele.github.io/comitup/)
2. Flash the image onto the MicroSD card using tools like Balena Etcher or Raspberry Pi Imager.
3. Insert the MicroSD card into the Raspberry Pi and power it on.

### 2. Verify Comitup Service Status

1. SSH into the Raspberry Pi:
   ```bash
   ssh pi@<raspberry_pi_ip_address>
   ```
   Default credentials:
   - Username: `pi`
   - Password: `raspberry`
2. Check the status of the Comitup service:
   ```bash
   sudo systemctl status comitup
   ```
3. Ensure the service is active and running. If not, troubleshoot as necessary by consulting the Comitup documentation.

### 3. Install Node.js on the Raspberry Pi

1. Add the NodeSource distribution to your package list:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   ```
   Replace `16.x` with the desired version of Node.js.
2. Install Node.js:
   ```bash
   sudo apt-get install -y nodejs
   ```
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```
   Ensure both Node.js and npm are installed correctly.

### 4. Clone the WiFi Config Application Repository

1. Once the Raspberry Pi is connected to a WiFi network (set up using Comitup), clone the application repository:
   ```bash
   git clone https://github.com/KirPot05/wifi-config-new.git
   ```
2. Navigate to the application directory:
   ```bash
   cd wifi-config-new
   ```

### 5. Configure WiFi Using Comitup Instructions

1. Follow the instructions provided in the Comitup documentation to set up the WiFi network.
2. Ensure the Raspberry Pi is connected to a WiFi network before proceeding.

### 6. Access the Application

1. Once the device is connected to a WiFi network, identify the IP address assigned to the Raspberry Pi.
2. Open a web browser on a device connected to the same network.
3. Enter the Raspberry Pi’s IP address in the browser's address bar to access the application.
4. Follow the on-screen instructions provided by the application to complete the WiFi configuration.

## Additional Information

- If you encounter any issues during the setup, refer to the respective documentation for Comitup and Node.js.
- Ensure your Raspberry Pi is up-to-date by running:
  ```bash
  sudo apt-get update
  sudo apt-get upgrade
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.
