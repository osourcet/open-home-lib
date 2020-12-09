export default class DeviceLibrary {
    // !'type' property must be set!
    // must be the same name as the filename AND the type param in the device code for which this library is written
    static type = 'template';

    // !'version' property must be set!
    // must have the format: 'number.number'
    // must be greater than 0
    static version = '1.0';
    
    // html code, which will be insert into setup page
    static html_setup = ``;

    // html code, which will be insert into device page
    static html_page = ``;

    // functions, which can be run by the api
    // all functions get the params: tcpClient (to this/active device), ...
    static functions = {
        test: (tcpClient) => {},
    }
    
}

/* 
that is also possible:
module.exports = {
    type: 'template',
    ... all properties ...
};
*/
