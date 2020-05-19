const path = require('path');

const getEnvFilePath = () => {
  const envPath = {
    TEST: '.env.test',
    LOCAL: '.env.local'
  };

  return path.resolve(process.cwd(), envPath[process.env.TEST_ENV] || '.env.test');
};

exports.getEnvFilePath = getEnvFilePath;
