const msgFormatConst = (msj) => {
    console.log(`-----Success------`);
}

const resApi=(res,msg,data)=>{
    res.json({
        msg: msg,
        total: data.length,
        data: data
    })
}

module.exports ={
    msgFormatConst,
    resApi
}
