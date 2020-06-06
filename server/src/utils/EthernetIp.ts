import os from 'os';

function getEthernetIp() {
    const manualIp = '192.168.100.7'; // Se der ruim bota o IP aqui;

    const net = os.networkInterfaces()
    
    if(net.Ethernet) {
        return net.Ethernet[1].address; 
    }
    
    return manualIp;
}

export default getEthernetIp;