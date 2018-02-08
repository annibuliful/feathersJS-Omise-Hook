const {
  omiseSecretKey
} = require('./config');
const omise = require('omise')({
  'secretKey': omiseSecretKey
});
module.exports = () => {
  return (hook) => {
    omise.transfers.create({
      'amount': hook.data.amount,
      'recipient': hook.data.recipient
    }, function (error) {
      if (!error) {
        throw Error('err');
      } else {
        return hook;
      }
    });
  };
};
