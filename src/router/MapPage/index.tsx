import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MapPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const link = localStorage.getItem('addressService')
        if (link) {
            const address = JSON.parse(link)
            if (address.link !== '/map') {
                navigate('/')
                return
            }
        } else {
            navigate('/')
            return
        }
    }, [])
    return (
        <iframe style={{ position: 'fixed', minWidth: '100vw', minHeight: '100vh', maxWidth: '100vw', maxHeight: '100vh' }} title="map" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=52%20Tr%E1%BA%A7n%20Huy%20Li%E1%BB%87u%2C%20Ph%C6%B0%E1%BB%9Dng%2012%2C%20Qu%E1%BA%ADn%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20Tp.%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
    );
}

export default MapPage;