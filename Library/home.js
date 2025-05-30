var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["On"] = "On";
    DeviceStatus["Off"] = "Off";
    DeviceStatus["Standby"] = "Standby";
})(DeviceStatus || (DeviceStatus = {}));
function toggleDeviceStatus(device, newStatus) {
    var _a; 
    var validTransition = (_a = {},
        _a[DeviceStatus.On] = [DeviceStatus.Off, DeviceStatus.Standby],
        _a[DeviceStatus.Off] = [DeviceStatus.On],
        _a[DeviceStatus.Standby] = [DeviceStatus.On, DeviceStatus.Off],
        _a);
    if (validTransition[device.status].includes(newStatus)) {
        device.status = newStatus;
        return device;
    }
    else {
        return "Invalid status transition from ".concat(device.status, " to ").concat(newStatus, ".");
    }
}
