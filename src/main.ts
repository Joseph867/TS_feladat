const jegyek: Array<{nev: string; jegy: number}>= []

document.addEventListener('DOMContentLoaded', () => {
    const user = document.querySelector<HTMLInputElement>("#user")
    const jegy = document.querySelector<HTMLSelectElement>("#Erdemjegy")
    const gomb = document.querySelector<HTMLButtonElement>("#add")
    const listagomb= document.querySelector<HTMLButtonElement>("#listagomb")
    const result = document.querySelector<HTMLParagraphElement>('#result')

    gomb?.addEventListener("click", () =>{
        jegyek.push({nev: user!.value, jegy: parseInt(jegy!.value)})
    })
    listagomb?.addEventListener("click", () => {
        result!.innerHTML = "";
        for (const diak of jegyek) {
            const sor = document.createElement("span")
            sor.innerHTML = `${diak.nev} ${diak.jegy}`
            result?.append(sor)
        }
    })

    
    

        
}) 








