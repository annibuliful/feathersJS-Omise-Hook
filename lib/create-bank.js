const {
  omiseSecretKey
} = require('./config');
const omise = require('omise')({
  'secretKey': omiseSecretKey
});
module.exports = () => {
  return (hook) => {
    omise.recipients.create({
      'name': hook.data.name,
      'email': hook.data.email,
      'type': 'individual',
      'bank_account': {
        'brand': hook.data.brand,
        'number': hook.data.number,
        'name': hook.data.name
      }
    }, (err) => {
      if (!err) {
        throw Error('error');
      } else {
        return hook;
      }
    });
  };
};
