let productos = [
{ id:'9' , categoria: 'REMERAS',nombre:"remara",  precio:9, img:'http://d2r9epyceweg5n.cloudfront.net/stores/001/697/627/products/remera-reef-kosu-tee-amarilla-mujer11-042023e9be54b448c416327627798358-640-0.jpg'},
{ id:'10' , categoria: 'REMERAS',nombre:"remera", precio:10, img:'http://d2r9epyceweg5n.cloudfront.net/stores/001/697/627/products/remera-reef-kosu-tee-amarilla-mujer11-042023e9be54b448c416327627798358-640-0.jpg'},
{ id:'11' , categoria: 'PANTALONES',nombre:"pantalon", precio:11, img:'https://s3.abcstatics.com/media/MM/2021/12/22/apertura-pantalones-lentejuelas-navidad-kofD--720x900@abc.jpg'},
{ id:'12' , categoria: 'PANTALONES',nombre:"pantalon", precio:12, img:'https://s3.abcstatics.com/media/MM/2021/12/22/apertura-pantalones-lentejuelas-navidad-kofD--720x900@abc.jpg'},

] 
export const gFetch = (id) => new Promise( (res, rej)=>{
let condition = true
if (condition) {
    setTimeout(()=>{
        res (id ? productos.find(prod => id === prod.id) : productos)
    },1000)
}else {
    rej('error')
}
})

export default gFetch