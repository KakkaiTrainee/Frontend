const getRegions = async () => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://localhost:8081/api/regions`)
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
        const res = await fetch(`http://localhost:8081/api/provinces`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Region data`)
    }catch(error){
        console.log(error)
    }
}
const getProvinceImageById = async (id) => {
    try{
        //const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/regions`)
        const res = await fetch(`http://localhost:8081/api/provinces/images/${id}`)
        if(res.ok){
            return await res.json()
        }else throw new Error(`Error,cannot get Region data`)
    }catch(error){
        console.log(error)
    }
}
export {getRegions,getProvinces,getProvinceImageById}
