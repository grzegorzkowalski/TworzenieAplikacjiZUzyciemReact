import React, {FC, useEffect, useState} from 'react';

interface GeoLocationResponse {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
}

const Ip : FC = () => {
    const [ip, setIP] = useState<string>('');
    const [geo, setGeoIP] = useState<GeoLocationResponse | boolean>(false);

    useEffect(() => {
        fetch('https://api.ipify.org')
            .then(res => res.text())
            .then(ipV4 => setIP(ipV4));
    }, []);

    useEffect(() => {
        fetch(`http://ip-api.com/json/${ip}`)
            .then(res => res.json())
            .then(ipDetails => setGeoIP(ipDetails));
    }, [ip]);

    if (geo) {
        return (
            <div>
                <h2>IP: {geo.query}</h2>
                <p>Miasto: {geo.city} </p>
                <p>Kraj: {geo.country}</p>
                <p>Strefa czasowa: {geo.timezone}</p>
            </div>
        );
    } else {
        return null
    }

};

export default Ip;
