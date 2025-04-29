
enum DeviceStatus {
    ON = "On",
    OFF = "Off",
    STANDBY = "Standby"
}

interface SmartDevice {
    deviceName: string;
    deviceType: string;
    status: DeviceStatus;
}

function toggleDeviceStatus(device: SmartDevice, newStatus: DeviceStatus): SmartDevice {
    if (
        (device.status === DeviceStatus.OFF && newStatus === DeviceStatus.STANDBY) ||
        (device.status === DeviceStatus.STANDBY && newStatus === DeviceStatus.OFF)
    ) {
        return device; // Invalid transition, return original device
    }
    return { ...device, status: newStatus };
}

const smartDevice1: SmartDevice = { deviceName: "Living Room Light", deviceType: "Light", status: DeviceStatus.OFF };
const updatedDevice1 = toggleDeviceStatus(smartDevice1, DeviceStatus.ON);
console.log(`Updated status of ${updatedDevice1.deviceName}: ${updatedDevice1.status}`);