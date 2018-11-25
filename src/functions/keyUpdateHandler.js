import distance from './distance';
let sorted = [];
const keyUpdateHandler = (obj, defaultLocation) => {

    for (let i = 0; i < obj.length; i++) {
        obj[i].calculated = distance(defaultLocation.latitude, defaultLocation.longitude, obj[i].coordinates.latitude, obj[i].coordinates.longitude);
        sorted.push(obj[i]);
    }

    return sorted;

}
export default keyUpdateHandler;
