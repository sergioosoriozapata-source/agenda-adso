const nombre = "Carolina";
const ficha = 3412768;
const notas = [1.0, 2.0, 2.8];
const promedio = (notas[0] + notas[1] + notas[2]) / 3;
console.log(`
    =======================
    sistema de notas sena
    =======================
    Aprendiz: ${nombre}
    Ficha: ${ficha}
    Notas:${notas}
    =======================
    Promedio: ${promedio.toFixed(2)}
    Estado: ${promedio >= 3 ? "Aprobado" : "No Aprobado"}
    `);
