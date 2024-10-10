export const customLog = <T>(data: T) => {
    const typeName = typeof data === 'object' && data !== null 
        ? (data.constructor ? data.constructor.name : 'Object') 
        : typeof data;

    console.log(`${typeName} =`, data);
};
