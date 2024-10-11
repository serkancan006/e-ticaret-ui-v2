export const customLog = <T extends (...args: any[]) => any>(fn: T, data: any) => {
    // Fonksiyonun ya da bileşenin ismini alıyoruz
    const functionName = fn.name || 'Anonymous Function';

    // İlk olarak fonksiyon/bileşen adını logluyoruz
    console.log(`${functionName}:`);

    // Ardından gelen veriyi normal console.log ile logluyoruz
    const typeName = typeof data === 'object' && data !== null 
        ? (data.constructor ? data.constructor.name : 'Object') 
        : typeof data;
    console.log(`${typeName} =`, data);
};

// KUllanımları
// const MyComponent = () => <div>Hello</div>;

// customLog(MyComponent, { message: 'Component log' });

// function myFunction() {
//     console.log('Running function');
// }

// customLog(myFunction, { key: 'Function log' });
