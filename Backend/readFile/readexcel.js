import xlsx from "xlsx"

const ExceltoJSON = () => {
    
    const excel = xlsx.readFile("Example.xlsx")
    
    var nombreHoja = excel.SheetNames;
    let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    
    const jDatos = []

    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];
        jDatos.push({
            ...element,
            Date: new Date((element.Date - (25567 + 2)) * 86400 * 1000)
        })   
    }
    console.log(jDatos)
}

ExceltoJSON();

export default ExceltoJSON