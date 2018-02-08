const {
  omiseSecretKey
} = require('./config');
const omise = require('omise')({
  'secretKey': omiseSecretKey
});
module.exports = () => {
  return (hook) => {
    omise.charges.create({
      'amount': hook.data.amount,
      'currency': 'thb',
      'card': hook.data.tokenID
    }, (err) => {
      if (!err) {
        throw Error('error');
      } else {
        return hook;
      }
    });
  };
};
