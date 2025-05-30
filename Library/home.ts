enum DeviceStatus{
    On="On",
    Off="Off",
    Standby= "Standby"
}

type SmartDevice =  {
    deviceName: string
    deviceType: string
    status: DeviceStatus
};

function toggleDeviceStatus(device: SmartDevice, newStatus: DeviceStatus): SmartDevice | string{
    const validTransition: Record<DeviceStatus, DeviceStatus[]> = {
        [DeviceStatus.On]: [DeviceStatus.Off, DeviceStatus.Standby],
        [DeviceStatus.Off]: [DeviceStatus.On],
        [DeviceStatus.Standby]: [DeviceStatus.On, DeviceStatus.Off]
    };
    if ((validTransition[device.status] as DeviceStatus[]) .includes(newStatus)) {
        device.status = newStatus;
        return device;
    } else {
        return `Invalid status transition from ${device.status} to ${newStatus}.`;
    }
}



