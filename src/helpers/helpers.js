const msgFormatConst = (msj) => {
  console.log(`-----Success------`);
};

const resApi = (res, msg, data) => {
  res.json({
    msg: msg,
    total: data.length,
    data: data,
  });
};

const resApiError = (res, msg, data, code) => {
  res.status(code).json({
    msg: msg,
    total: data.length,
    data: data,
  });
};

module.exports = {
  msgFormatConst,
  resApi,
  resApiError,
};
