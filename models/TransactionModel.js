//import * as ExcelJs from 'exceljs';
const fs = require('fs');
const excel = require('exceljs');
export default{
    getData:function(data, callback){
        console.log(data);
        let from = new Date(data.from)
        let to = new Date(data.to)
        Transaction.find({
            createdAt: {
                $gte: from,
                $lte: to
            },
            $or: [
                {
                    fromUser: data.memberId
                },
                {
                    toUser: data.memberId
                }
            ]
        }).exec(function(err, result){
            console.log("err", err, "result", result );
            if(err){
                callback(err)
            }else{            
              
            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('My Transactions');
            worksheet.columns =[
            {header:'_id', key:'_id', width:20},
            {header:'transactionType', key:'transactionType', width:20},
            {header:'fromUser', key:'fromUser', width:20},
            {header:'toUser', key:'toUser', width:20},
            {header:'type', key:'type', width:20},
            {header:'amount', key:'amount', width:20},
            {header:'updatedAt', key:'updatedAt', width:40},
            {header:'createdAt', key:'createdAt', width:40},

            ];
        
            worksheet.addRows(result);
        
            workbook.xlsx.writeFile('Transactions.xlsx').then(function(){
            console.log("File Saved!")
            })
            callback(null, result)
            }
        })
            
    }

}