cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-unique-device-id/www/uniqueid.js",
        "id": "cordova-unique-device-id.UniqueDeviceID",
        "pluginId": "cordova-unique-device-id",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-unique-device-id": "1.3.2"
}
// BOTTOM OF METADATA
});