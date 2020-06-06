import { NetworkInfo } from "react-native-network-info";

async function getEthernetIp() {
    const manualIp = '192.168.100.7'; // Se der ruim bota o IP aqui;

    console.log('cheguei')

    const ip = await NetworkInfo.getIPAddress();
    
    console.log(ip);

    return manualIp;
}

export default getEthernetIp;