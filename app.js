addTableRow = () => {
    //Defalut input value
    dName = "วิชา"
    dCredit = 3.0
    dGrade = 3.0
     
    // get html table
    var table = document.getElementById('gradeTable');
    tableRowLength = table.rows.length;
     
    // add new row 
    var newRow = table.insertRow(table.rows.length);
     
    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    // add values to the cells
     
    cel1.innerHTML = `<td><input id="subject${tableRowLength}" type="text" value="${dName}${tableRowLength}"></td>`;
    cel2.innerHTML = `<td><input id="credit${tableRowLength}" type="text" value="${dCredit}"></td>`;
    cel3.innerHTML = `<td><input id="grade${tableRowLength}" type="text" value="${dGrade}"></td>`; 
    console.log(`add button${tableRowLength}`);
}

deleteTableRow = (buttonName) => {
    table = document.getElementById('gradeTable');
    if(table.rows.length > 2){
        document.getElementById("gradeTable").deleteRow(table.rows.length-1);
    }else{
        alert("ไม่สามารถลบแถวได้ แถวมีได้น้อยสุดคือ 1 แถว")
    }
    
}

calculateGrade = () =>{
    

    let sumCredit = 0
    let sumGradeWeight = 0.0
    // get html table
    var table = document.getElementById('gradeTable');
    tLength = table.rows.length;
    for(let i = 1; i <= tLength-1; i++){ // Row start with1

        let subjectName = document.getElementById(`subject${i}`).value
        //check credit and is input isnumber
        if ( isNaN(document.getElementById(`credit${i}`).value) ){
            alert(`"หน่วยกิต" ของวิชา${subjectName} ต้องเป็นตัวเลขเท่านั้น!`)
            console.log(`Invalid Input "หน่วยกิต"`)
            return `Invalid Input "หน่วยกิต"`
        }
        if (isNaN(document.getElementById(`grade${i}`).value)){
            alert(`"เกรด" ของวิชา${subjectName} ต้องเป็นตัวเลขเท่านั้น!`)
            console.log(`Invalid Input "เกรด"`)
            return `Invalid Input "เกรด"`
        }
        
        let credit = parseInt(document.getElementById(`credit${i}`).value)
        let grade = parseFloat(document.getElementById(`grade${i}`).value)

        console.log(`credit = ${credit}`)
        console.log(`grade = ${grade}`)
        
        sumCredit += credit
        sumGradeWeight += grade*credit
        console.log(`sumCredit = ${sumCredit}`)
        console.log(`sumGradeWeight = ${sumGradeWeight}`)

    }
    avgGrade = gradeFormat(sumGradeWeight/sumCredit)
    //alert(`คุณได้เกรดเฉลี่ย${avgGrade}`)
    document.getElementById(`result`).innerHTML = `คุณได้เกรดเฉลี่ย: ${avgGrade}`
    document.getElementById(`result`).className = "animate-top";
}

gradeFormat = (grade) =>{
    grade = grade.toString()

    grade = grade.split(".")

    if (grade.length == 1){// grade = x.0
        grade.push('00')
    }else if (grade[1].length < 2){ // grade = x.3
        grade[1] = grade[1][0] + '0'

    }
    // return x.xx
    return `${grade[0]}.${grade[1][0]}${grade[1][1]}`

}

addTableRow()
console.log("finish")