let productos = [

    {id: '1', name: 'Paloma Herrera', categoria: 'perfumes', stock: '100', price: '7500', foto:'../public/perf1.png'},
    {id: '2', name: 'Miss Dior', categoria: 'perfumes', stock: '100', price: '6500', foto:'../public/perf2.png'},
    {id: '3', name: 'Versage', categoria: 'perfumes', stock: '100', price: '6700', foto:'../public/perf3.png'},
    {id: '4', name: 'Chanel', categoria: 'perfumes', stock: '100', price: '7000', foto:'../public/perf4.png'},
    {id: '5', name: 'Nautica Voyage', categoria: 'perfumes', stock: '100', price: '7100', foto:'../public/perf5.png'},
    {id: '6', name: 'Polo Club', categoria: 'perfumes', stock: '100', price: '6900', foto:'../public/perf6.png'},
    {id: '7', name: 'Icon', categoria: 'perfumes', stock: '100', price: '6000', foto:'../public/perf7.png'},
    {id: '8', name: 'Tommy', categoria: 'perfumes', stock: '100', price: '7130', foto:'../public/perf8.png'},
    {id: '9', name: 'Dermaglós', categoria: 'cremas', stock: '100', price: '1200', foto:'../public/crem1.png'},
    {id: '10', name: 'Eucerin', categoria: 'cremas', stock: '100', price: '1400', foto:'../public/crem2.png'},
    {id: '11', name: 'Hipoglós', categoria: 'cremas', stock: '100', price: '1900', foto:'../public/crem3.png'},
    {id: '12', name: 'Máscara para pestañas', categoria: 'maquillajes', stock: '100', price: '1000', foto:'../public/maq1.png'},
    {id: '13', name: 'Base Líquida', categoria: 'maquillajes', stock: '100', price: '1300', foto:'../public/maq2.png'},
    {id: '14', name: 'Delineador', categoria: 'maquillajes', stock: '100', price: '900', foto:'../public/maq3.png'},
    {id: '15', name: 'Lápiz labial', categoria: 'maquillajes', stock: '100', price: '2000', foto:'../public/maq4.png'}
]

export const gFetch = (id) => {
    return new Promise( ( resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod=> prod.id == id): productos)
        }, 1000)
    })
}