const msgFormatConst = (msj) => {
    console.log(`Hola mundo`);
}

const resApi=(req,res,data)=>{
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
