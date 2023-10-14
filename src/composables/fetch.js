const getRegions = async () => {
    try{
        //const res = await fetch(`${import.meta.http://chanathipgeist.ddns.net:8088/env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`api/regions`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Region data`)
    }catch(error){
        console.log(error)
    }
}
const getProvinces = async () => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://chanathipgeist.ddns.net:8088/api/provinces`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Province data`)
    }catch(error){
        console.log(error)
    }
}
const getProvinceImageById = async (id) => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://chanathipgeist.ddns.net:8088/api/provinces/images/${id}`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get ProvinceImage data`)
    }catch(error){
        console.log(error)
    }
}

const getHotels = async () => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://chanathipgeist.ddns.net:8088/api/hotels`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Hotel data`)
    }catch(error){
        console.log(error)
    }
}

const getHotelById = async (id) => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://chanathipgeist.ddns.net:8088/api/hotels/${id}`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Hotel data`)
    }catch(error){
        console.log(error)
    }
}

const getTubs = async () => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://chanathipgeist.ddns.net:8088/api/tubs`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Tub data`)
    }catch(error){
        console.log(error)
    }
}


export {getRegions,getProvinces,getProvinceImageById,getHotels,getTubs,getHotelById}
