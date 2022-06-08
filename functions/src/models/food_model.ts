//========== MODELO Food ==========//

export interface Food {
    idFood?: string,
    nombre?: string,
    descripcion?: string,
    imagen?: string,
    precio?: string,
    
}

export function Food(data: any, id?: string) {
    const { nombre, descripcion, imagen, precio } = data;

    let object: Food = {
        idFood: id,
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        precio: precio, 
        
    };
    return object;
}
